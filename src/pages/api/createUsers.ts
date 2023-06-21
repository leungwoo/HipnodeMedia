// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import User from '../../../lib/mongoConnection/models/User';
import { IUser } from '../../../lib/utils/type';
import connectMongo from '../../../lib/mongoConnection';

type Data = {
  message?: string
  error?: string
  user?: IUser
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  // provider:
): Promise<void> {
  await connectMongo();
  try {
    if (req.method === 'POST') {
      const newUser = await User.create({ ...req.body });
      console.log(newUser);
      res.status(200).json({ message: `${newUser} created` });
    }
  } catch (error) {
    res.status(500).json({ error: `User couldnt be created Error: ${error}` });
  }
}
