import type { NextApiRequest, NextApiResponse } from 'next';
import { Sort } from 'mongodb';
import {
  connectToDatabase,
  getAllDocuments,
  insertDocument,
} from '@/helpers/db-util';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { name, email, text } = req.body;

    if (
      !name ||
      name.trim() === '' ||
      !email ||
      email.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment = {
      name,
      email,
      text,
      eventId,
    };

    let client;
    try {
      client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    if (!client) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    let result;
    try {
      result = await insertDocument(client, 'comments', newComment);
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed.' });
      return;
    }

    Object.assign(newComment, { _id: result.insertedId });
    client.close();

    res.status(201).json({ message: 'Added comment.', comment: newComment });

    return;
  }

  if (req.method === 'GET') {
    let client;
    try {
      client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    if (!client) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const sortComments: Sort = { _id: -1 };
    let comments;
    try {
      comments = await getAllDocuments(client, 'comments', sortComments);
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
      return;
    }

    client.close();

    res.status(200).json({ comments: comments });
  }
}

export default handler;
