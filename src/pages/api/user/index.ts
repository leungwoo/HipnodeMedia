// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import authOptions from '../auth/[...nextauth]';

import User from '../../../../lib/mongoConnection/models/User';
import { IUser, SessionType } from '../../../../lib/utils/type';
import connectMongo from '../../../../lib/mongoConnection';

type Data = {
  users?: IUser[] // here we are returnning an array of users
  user?: IUser // here we are returnning an array of user
  error?: string // error message
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log('connecting to mongo');
  await connectMongo();
  console.log('connected to mongo');

  const session: SessionType | null = await getServerSession(req, res, authOptions);
  console.log(session);
  if (req.method === 'GET') {
    try {
      if (session) {
        const user = await User.findOne({ email: session.user?.email });
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(404).json({ error: `Cannot delete posts Error: ${error}` });
      // res.status(404).json({ error: `Cannot delete posts Error: ${error}` });
    }
  } else if (req.method === 'PATCH') {
    try {
      if (session) { // If we are logged in
        const updateData = {
          name: req.body.name,
          profile_photo: req.body.profile_photo,
          tagline: req.body.tagline,
          about: req.body.about,
          userUrl: req.body.userUrl,
          twitter: req.body.twitter,
          facebook: req.body.facebook,
          instagram: req.body.instagram,
        };

        // Remove undefined properties from the udateData object
        Object.keys(updateData).forEach((key) => (updateData as any)[key] === undefined && delete (updateData as any)[key]);

        const updatedUser = await User.findOneAndUpdate({ email: session.user?.email }, updateData, { new: true })
        res.status(202).json({ user: updatedUser });
      } else { // If we are not logged in
        throw new Error('You need to be a registered user to update your information');
      }
    } catch (error) {
      res.status(404).json({ error: `Cannot update user information Error: ${error}` });
    }
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
