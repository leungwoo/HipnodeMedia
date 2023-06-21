import { MongoClient } from 'mongodb';

const { MONGODB_URL } = process.env;

if (!MONGODB_URL) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cachedClient: any = null;
let cachedDb: any = null;

export async function connectToDatabase(dbName: any) {
  if (!MONGODB_URL) throw new Error("Please provide a mongodb URL");
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URL, {
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
