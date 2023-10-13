import { query as q, Client } from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.FAUNADB_SECRET_KEY;
const client = secret ? new Client({ secret }) : null;

interface FaunaDBResponse {
  data: {
    name: string;
    preparation: string;
    preparationTime: string;
    ingredients: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;

      if (typeof id !== "string" || id === undefined) {
        return res
          .status(400)
          .json({ error: "O parâmetro de rota 'id' deve ser uma string." });
      }

      if (!client) {
        return res
          .status(500)
          .json({
            error:
              "A variável de ambiente FAUNADB_SECRET_KEY não está definida.",
          });
      }

      const dbs: FaunaDBResponse = await client.query(
        q.Delete(q.Ref(q.Collection("recipe"), id))
      );

      if (!dbs.data) {
        return res.status(404).json({ error: "Receita não encontrada." });
      }

      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Método não permitido. Use DELETE." });
  }
}
