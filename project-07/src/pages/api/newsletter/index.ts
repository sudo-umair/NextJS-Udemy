import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase, insertDocument } from '@/helpers/db-util';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;
    try {
      client = await connectToDatabase();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    if (!client) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Inserting email failed.' });
      return;
    }

    client.close();

    console.log(userEmail);
    res.status(201).json({ message: 'Signed up!' });
  } else if (req.method === 'GET') {
    res.status(200).json({ message: 'GET request received' });
  }
}

export default handler;
