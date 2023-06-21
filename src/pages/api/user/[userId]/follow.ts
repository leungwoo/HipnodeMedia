// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import User from '../../../../../lib/mongoConnection/models/User';
import { IUser, SessionType } from '../../../../../lib/utils/type';
import connectMongo from '../../../../../lib/mongoConnection';
import { getServerSession } from 'next-auth';
import authOptions from '../../auth/[...nextauth]';
import { ObjectId } from 'mongodb';
import Notification from 'lib/mongoConnection/models/Notification';

type Data = {
  users?: IUser[]; // here we are returnning an array of users
  user?: IUser; // here we are returnning an array of user
  error?: string; // error message
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  try {
    await connectMongo();
    const { userId } = req.query;

    if (req.method === 'POST') {
      const session: SessionType | null = await getServerSession(
        req,
        res,
        authOptions
      );

      if (!session?.user) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      const followedUser = await User.findById(userId);

      if (!followedUser) {
        res.status(404).json({ error: `User not found` });
        return;
      }

      const ourUser = await User.findOne({ email: session?.user?.email });

      if (!ourUser) {
        res.status(404).json({ error: `Your user not found` });
        return;
      }

      // If the user ID is not already in the followers array, add it, otherwise remove it
      if (ourUser.following.includes(followedUser?._id)) {
        followedUser.followers = followedUser.followers.filter(
          (id: ObjectId) => !id.equals(ourUser?._id)
        );

        ourUser.following = ourUser.following.filter(
          (id: ObjectId) => !id.equals(followedUser?._id)
        );
      } else {
        followedUser.followers.push(ourUser?._id);
        ourUser.following.push(followedUser?._id);
      }

      await ourUser.save();
      await followedUser.save();

      await Notification.create({
        fromUser: ourUser?._id,
        forUser: followedUser?._id,
        description: ourUser.name + ' followed you',
        type: 'follow',
      });

      res.status(201).end();
    } else {
      res.status(500).json({ error: 'Server cannot be reached' });
    }
  } catch (error) {
    res.status(500).json({ error: `Cannot follow user Error: ${error}` });
  }
}
