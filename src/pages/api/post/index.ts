/* eslint-disable camelcase */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import { FilterQuery } from 'mongoose';
import Post from '../../../../lib/mongoConnection/models/Post';
import authOptions from '../auth/[...nextauth]';
import User from '../../../../lib/mongoConnection/models/User';
import { IPost, IUser, SessionType } from '../../../../lib/utils/type';
import connectMongo from '../../../../lib/mongoConnection';
import Group from '../../../../lib/mongoConnection/models/Group';

// creating type for the json response we send
type Data = {
  message?: string;
  status?: string;
  error?: string;
  posts?: IPost[];
  page?: number;
  totalPages?: number;
  postsPerPage?: number;
};
// Expecting the Group _mongoose Id to be send in req body as POST request.

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

  // switch case for :"GET","POST","PUT","DELETE"
  switch (method) {
    case 'GET':
      try {
        // const userId = req.query.userId;
        const { userId } = req.query;
        const filter: FilterQuery<any> = {};
        if (userId) {
          filter.author = userId;
        }

        const page = parseInt(req.query.page as string, 10) || 1; // page number
        const postsPerPage = 5; // number of posts per page
        const skip = (page - 1) * postsPerPage;
        const postCount = await Post.countDocuments(filter); // total posts
        const totalPages = Math.ceil(postCount / postsPerPage); // number of pages
        if (page > totalPages) {
          res.status(404).json({
            status: 'fail',
            message: 'No pages found',
          });
        }

        const posts = (await Post.find(filter)
          .populate('author')
          .sort({ created_at: 1 })
          .skip(skip)
          .limit(postsPerPage)
          .exec()) as IPost[];
        res
          .status(200)
          .json({ message: 'success', page, totalPages, postsPerPage, posts });
      } catch (error) {
        res
          .status(500)
          .json({ error: `cannot fetch posts/ server error: ${error}` });
      }
      break;
    case 'POST':
      try {
        if (session) {
          const currentUser = await User.findOne({
            email: session.user?.email,
          });
          const { parent_group } = req.body;
          // console.log({ title, content, post_image, post_tags, author, parent_group });
          const currentGroup = await Group.findOne({ _id: parent_group });
          console.log(req.body);
          const newPost = new Post({
            ...req.body,
            author: currentUser as IUser,
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          newPost.save((err: any) => {
            if (err) {
              console.log(err);
              return null;
            }
          });
          currentUser?.posts_made.push(newPost);
          currentUser?.save();
          currentGroup?.posts.push(newPost);
          currentGroup?.save();
          console.log(newPost);
          res.status(200).json({ message: `${newPost} created` });
        } else {
          throw new Error('User must be signed in to post');
        }
      } catch (error) {
        res.status(500).json({ error: `post not created Error: ${error}` });
      }
      break;
    default:
    // res.status(405).end(`Method ${method} Not Allowed`);
  }
}
