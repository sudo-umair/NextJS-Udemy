import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_collection}.obtfiff.mongodb.net/?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  const client = await MongoClient.connect(connectionString);

  return client;
}
