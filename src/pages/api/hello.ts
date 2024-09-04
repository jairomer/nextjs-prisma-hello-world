import prisma from '../../lib/prisma';

/*
 * This is an API route that interacts with the database. 
* */
export default async function handler(req: any, res: any) {
    if (req.method === 'OPTIONS') {
      // Handle CORS preflight request
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).end();
    }

    if (req.method === 'POST') {
        // create a new message
        const { content } = req.body;
        console.log(content);

        const message = await prisma.message.create({
            data: { content },
        });

        res.status(201).json(message);

    } else if (req.method === 'GET') {
        // Retrieve all messages
        const messages = await prisma.message.findMany();

        res.status(200).json(messages);

    } else {
        // Method not allowed
        res.status(405).end();

    }
}
