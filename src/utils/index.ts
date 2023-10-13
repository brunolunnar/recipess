export const KeyVerification=():string=>{
    const secret = process.env.FAUNADB_SECRET_KEY;

   if (!secret) {
  throw new Error(
    "A variável de ambiente FAUNADB_SECRET_KEY não está definida."
  );
}
return secret
}