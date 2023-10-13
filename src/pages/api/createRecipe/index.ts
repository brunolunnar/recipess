// Importe as bibliotecas necessárias
import { query as q, Client } from "faunadb";
import { Request, Response } from "express";

const secret = process.env.FAUNADB_SECRET_KEY;

if (!secret) {
  throw new Error(
    "A variável de ambiente FAUNADB_SECRET_KEY não está definida."
  );
}

const client = new Client({ secret });

export default async (req: Request, res: Response) => {
  try {
    const { name, preparation, preparationTime, ingredients, img } = req.body;

    const result = await client.query(
      q.Create(q.Collection("recipe"), {
        data: {
          name,
          preparation,
          preparationTime,
          ingredients,
          img
        },
      })
    );

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
