/* eslint-disable camelcase */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import Group from '../../../../lib/mongoConnection/models/Group';
import authOptions from '../auth/[...nextauth]';
import User from '../../../../lib/mongoConnection/models/User';
import { IGroup, IUser, SessionType } from '../../../../lib/utils/type';
import connectMongo from '../../../../lib/mongoConnection';

// creating type for the json response we send
type Data = {
 message?:string
 error?:string
 group?:IGroup
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const session : SessionType|null = await getServerSession(req, res, authOptions);
  if (session) {
    await connectMongo();

    try {
      if (req.method === 'POST') {
        const currentUser = await User.findOne({ email: session.user?.email });
        const newGroup = new Group({ ...req.body, owner: currentUser as IUser });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newGroup.save((err: any) => {
          if (err) {
            console.log(err);
            return null;
          }
        });
        currentUser?.groups_owned.push(newGroup);
        currentUser?.save();
        console.log(newGroup);
        res.status(200).json({ message: `${newGroup} created` });
      }
    } catch (error) {
      res.status(500).json({ error: `group couldnt be created Error: ${error}` });
    }
  }
}
