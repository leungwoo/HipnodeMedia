import { connectToDatabase } from '../../../lib/mongo';

export default async function handler(req: any, res: any) {
  const { db } = await connectToDatabase('Hipnode');

  const data = await db.collection('posts').aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        as: 'author',
      },
    },
    {
      $unwind: '$author',
    },
    {
      $project: {
        _id: 1,
        title: 1,
        content: 1,
        post_image: 1,
        created_at: 1,
        author: '$author.name',
        authorId: '$author._id',
        post_tags: 1,
      },
    },
  ]).toArray();

  res.json(data);
  console.log(data);
}
