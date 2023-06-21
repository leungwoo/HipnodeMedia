// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import authOptions from './auth/[...nextauth]';

import User from '../../../lib/mongoConnection/models/User';
import { IUser, SessionType } from '../../../lib/utils/type';
import connectMongo from '../../../lib/mongoConnection';
import Notification from 'lib/mongoConnection/models/Notification';

type Data = {
  users?: IUser[]; // here we are returnning an array of users
  user?: IUser; // here we are returnning an array of user
  error?: string; // error message
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('connecting to mongo');
  await connectMongo();
  console.log('connected to mongo');

  const session: SessionType | null = await getServerSession(
    req,
    res,
    authOptions
  );
  console.log(session);
  if (req.method === 'GET') {
    try {
      if (!session) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      const user = await User.findOne({ email: session.user?.email });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      const notifications: any = await Notification.find({ forUser: user._id })
        .populate('fromUser', '_id name email profile_photo')
        .sort({ created_at: -1 });

      console.log(notifications);

      res.status(200).json(notifications);
      console.log(notifications);
    } catch (error) {
      res.status(500).json({ error: `Cannot delete posts Error: ${error}` });
    }
  } else if (req.method === 'DELETE') {
    try {
      if (!session) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      const user = await User.findOne({ email: session.user?.email });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      await Notification.updateMany({ forUser: user._id }, { read: true });

      res.status(202).end();
    } catch (error) {
      res.status(500).json({ error: `Cannot delete posts Error: ${error}` });
    }
  }
}
