import type { NextApiRequest, NextApiResponse } from 'next';
import Post from '../../../../lib/mongoConnection/models/Post';
import connectMongo from '../../../../lib/mongoConnection';
import { IPost } from '../../../../lib/utils/type';

type Data = {
  userPosts?: IPost[]
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  await connectMongo();
  const { userId } = req.query;

  if (req.method === 'GET') {
    try {
      const posts = await Post.find({ author_id: userId });
      res.status(200).json({ userPosts: posts });
    } catch (error) {
      res.status(404).json({ error: `Cannot fetch user posts Error: ${error}` });
    }
  } else {
    res.status(500).json({ error: 'Server cannot be reached' });
  }
}
