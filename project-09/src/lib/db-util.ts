import { MongoClient, Sort } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    console.log(error);
  }
};

export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: any
) => {
  const db = client.db('next-blog');
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  sort: Sort
) => {
  const db = client.db('next-blog');
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
};
