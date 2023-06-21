/* eslint-disable camelcase */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import Post from '../../../../lib/mongoConnection/models/Post';
import { IPost } from '../../../../lib/utils/type';
import connectMongo from '../../../../lib/mongoConnection';

// creating type for the json response we send
type Data = {
  message?: string
  status?: string
  error?: string
  posts?: IPost[]
  page?: number
  totalPages?: number
  postsPerPage?: number
}
// Expecting the Group _mongoose Id to be send in req body as POST request.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  await connectMongo();
  const { method } = req;
  const query = req.query.query as string;

  // switch case for :"GET","POST","PUT","DELETE"
  if (method === 'GET') {
    try {
      const page = parseInt(req.query.page as string, 10) || 1; // page number
      const postsPerPage = 2; // number of posts per page
      const skip = (page - 1) * postsPerPage;
      const postCount = await Post.countDocuments({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
          { post_tags: { $regex: query, $options: 'i' } },
        ],
      });
      const totalPages = Math.ceil(postCount / postsPerPage); // number of pages
      if (page > totalPages) {
        res.status(404).json({
          status: 'fail',
          message: 'No pages found',
        });
        return;
      }
      const posts = await Post.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
          { post_tags: { $regex: query, $options: 'i' } },
        ],
      })
        .skip(skip)
        .sort({ created_at: -1 })
        .limit(postsPerPage)
        .exec();

      console.log(posts);

      res
        .status(200)
        .json({ message: 'success', page, totalPages, postsPerPage, posts });
    } catch (error) {
      res
        .status(500)
        .json({ error: `cannot fetch posts/ server error: ${error}` });
    }
  } else {
    res.status(500).json({ error: 'Server cannot be reached' });
  }
}
