import { query as q, Client } from "faunadb";
import { Request, Response } from "express";

const secret = process.env.FAUNADB_SECRET_KEY;

if (!secret) {
  throw new Error(
    "A variável de ambiente FAUNADB_SECRET_KEY não está definida."
  );
}

const client = new Client({ secret });

interface FaunaDBResponse {
  data: IRecipe[];
}

interface IRecipeData {
  name: string;
  preparation: string;
  preparationTime: string;
  ingredients: string;
}

interface IRecipe {
  id: string;
  ts: number;
  ref: {
    id: string;
  };
  data: IRecipeData;
}

export default async (_req: Request, res: Response) => {
  try {
    const dbs = await client.query<FaunaDBResponse>(
      q.Map(
        q.Paginate(q.Documents(q.Collection("recipe"))),
        (ref) => q.Get(ref)
      )
    );

    const recipes: IRecipe[] = dbs.data.map((item) => {
      const id = item.ref.id;
      const { name, preparation, preparationTime, ingredients } = item.data || {};

      return {
        id,
        ts: item.ts,
        ref: {
          id,
        },
        data: {
          name: name || "", // Defina um valor padrão vazio se 'name' não estiver definido
          preparation: preparation || "",
          preparationTime: preparationTime || "",
          ingredients: ingredients || "",
        },
      };
    });

    res.status(200).json({ data: recipes });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
