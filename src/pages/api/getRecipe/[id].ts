import { query as q, Client } from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.FAUNADB_SECRET_KEY;
const client = secret ? new Client({ secret }) : null;



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    if (typeof id !== "string" || id === undefined) {
      return res.status(400).json({ error: "O parâmetro de rota 'id' deve ser uma string." });
    }

    if (!client) {
      return res.status(500).json({ error: "A variável de ambiente FAUNADB_SECRET_KEY não está definida." });
    }

    const dbs = await client.query<IFaunaDBResponse>(
      q.Get(q.Ref(q.Collection("recipe"), id))
    );

    if (!dbs.data) {
      return res.status(404).json({ error: "Receita não encontrada." });
    }

    const recipe = {
      id: dbs.ref.id,
      ts: dbs.ts.toString(),
      ...dbs.data,
    };

    res.status(200).json({ data: recipe });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
