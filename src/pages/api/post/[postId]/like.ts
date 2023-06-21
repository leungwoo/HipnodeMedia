import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import Post from '../../../../../lib/mongoConnection/models/Post';
import authOptions from '../../auth/[...nextauth]';
import User from '../../../../../lib/mongoConnection/models/User';
import { IPost, SessionType } from '../../../../../lib/utils/type';
import connectMongo from '../../../../../lib/mongoConnection';
import { ObjectId } from 'mongodb';

type Data = {
  message?: string;
  status?: string;
  error?: string;
  posts?: IPost[];
  page?: number;
  totalPages?: number;
  postsPerPage?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const session: SessionType | null = await getServerSession(
    req,
    res,
    authOptions
  );

  await connectMongo();
  const { method } = req;
  const { postId } = req.query;
  console.log(postId);

  switch (method) {
    case 'POST':
      try {
        const session: SessionType | null = await getServerSession(
          req,
          res,
          authOptions
        );

        if (!session?.user) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
        }

        const ourUser = await User.findOne({ email: session?.user?.email });

        if (!ourUser) {
          res.status(404).json({ error: `Your user not found` });
          return;
        }

        const post = await Post.findById(postId);

        if (!post) {
          res.status(404).json({ error: `Post not found` });
          return;
        }

        // If the user ID is not already in the followers array, add it, otherwise remove it
        if (!post.likes) post.likes = [];
        if (post.likes.includes(ourUser?._id)) {
          post.likes = post.likes.filter(
            (id: ObjectId) => !id.equals(ourUser?._id)
          );
        } else {
          post.likes.push(ourUser?._id);
        }

        await post.save();

        res.status(200).end();
      } catch (error) {
        res.status(404).json({ error: `Cannot fetch posts Error: ${error}` });
      }

      break;

    default:
      console.log('No valid method');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
