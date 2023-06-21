// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import User from '../../../../../lib/mongoConnection/models/User';
import { IUser } from '../../../../../lib/utils/type';
import connectMongo from '../../../../../lib/mongoConnection';

type Data = {
  users?: IUser[]; // here we are returnning an array of users
  user?: IUser; // here we are returnning an array of user
  error?: string; // error message
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  await connectMongo();
  const { userId } = req.query;
  console.log(userId);

  if (req.method === 'GET') {
    try {
      const user = await User.findById(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: `Cannot delete posts Error: ${error}` });
      // res.status(404).json({ error: `Cannot delete posts Error: ${error}` });
    }
  } else {
    res.status(500).json({ error: 'Server cannot be reached' });
  }
}
