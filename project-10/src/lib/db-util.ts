import { MongoClient, Sort } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_collection}.obtfiff.mongodb.net/?retryWrites=true&w=majority`;

export const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(connectionString);
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
  const db = client.db(process.env.mongo_db);
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
