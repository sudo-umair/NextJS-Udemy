import type { NextApiRequest, NextApiResponse } from 'next';
import type { IMessage } from '@/common/types';
import { insertDocument, connectToDatabase } from '@/lib/db-util';

type Data = {
  message: string;
  data?: IMessage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (
      !name ||
      name.trim() === '' ||
      !email ||
      email.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    let client;

    try {
      client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      console.log(error);
      return;
    }

    if (!client) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const response = await insertDocument(client, 'messages', newMessage);
      Object.assign(newMessage, { id: response.insertedId });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Storing message failed!' });
      console.log(error);
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', data: newMessage });
  } else {
    res.status(400).json({ message: 'Invalid request.' });
  }
}
