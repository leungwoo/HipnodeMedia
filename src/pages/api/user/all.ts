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
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      res.status(404).json({ error: `Cannot delete posts Error: ${error}` });
      // res.status(404).json({ error: `Cannot delete posts Error: ${error}` });
    }
  } else { res.status(500).json({ error: 'Server cannot be reached' }); }
}
