import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import Post from '../../../../../lib/mongoConnection/models/Post';
import authOptions from '../../auth/[...nextauth]';
import User from '../../../../../lib/mongoConnection/models/User';
import { IPost, SessionType } from '../../../../../lib/utils/type';
import connectMongo from '../../../../../lib/mongoConnection';

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
    case 'GET':
      try {
        const document = await Post.findById(postId)
          .populate('author')
        res.status(200).json(document);
      } catch (error) {
        res.status(404).json({ error: `Cannot fetch posts Error: ${error}` });
      }

      break;

    case 'PUT':
      try {
        if (session) {
          const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { ...req.body },
            { new: true });
          res.status(200).json({ message: 'Post edited successfully' });
        } else {
          throw new Error('User must be signed in to edit post');
        }
      } catch (error) {
        res
          .status(404)
          .json({ error: `Cannot edit post posts Error: ${error}` });
      }

      break;
    case 'DELETE':
      try {
        if (session) {
          const updatedUser = await User.findOneAndUpdate(
            { email: session.user?.email },
            {
              $pull: {
                posts_made: postId,
              },
            },
            {
              new: true,
            }
          );
          await Post.findByIdAndDelete(postId);
          res
            .status(200)
            .json({ message: 'Post deleted successfully' });
        } else {
          throw new Error('User must be signed in to delete post');
        }
      } catch (error) {
        res.status(404).json({ error: `Cannot delete posts Error: ${error}` });
      }
      break;
    default:
      console.log('No valid method');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
