
import { connectToDatabase } from '../../../lib/mongo';

export default async function handler(_req: any, res: any) {
  const { db } = await connectToDatabase('Hipnode');

  const data = await db.collection('posts').find().toArray();

  res.json(data);
}
