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

interface IRecipe {
  name: string;
  preparation: string;
  preparationTime: string;
  ingredients: string;
}

// Rota POST para adicionar uma nova receita
export default async (req: Request, res: Response) => {
  try {
    const { name, preparation, preparationTime, ingredients } = req.body; // Obtenha os dados da solicitação

    // Valide os dados, se necessário

    // Crie um novo documento no FaunaDB
    const result = await client.query(
      q.Create(q.Collection("recipe"), {
        data: {
          name,
          preparation,
          preparationTime,
          ingredients,
        },
      })
    );

    res.status(201).json(result); // Responda com o resultado da criação
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
