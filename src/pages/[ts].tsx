import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface RecipeData {
  id: string;
  name: string;
  preparation: string;
  preparationTime: string;
  ingredients: string;
  ts: string;
}

export default function Recipe() {
  const router = useRouter();

console.log(router.query);
  const id = router.query.ts;
  const [recipe, setRecipe] = useState<RecipeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        if (typeof id === "string") {
          const response = await fetch(`/api/getRecipe/${id}`);
          if (response.ok) {
            const data = await response.json();
            setRecipe(data.data);
          } else {
            console.error('Erro ao buscar receita.');
          }
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally {
        setLoading(false); // Marque o carregamento como concluído, independentemente do resultado.
      }
    }

    if (id) {
      fetchRecipe();
    }
  }, [id]);
  console.log("ID:", id)
  return (
    <div>
      
      {loading ? (
        <p>Carregando...</p>
      ) : (
        recipe ? (
          <>
            <h1>{recipe.name}</h1>
            <p>{recipe.preparation || ''}</p>
            <p>{recipe.preparationTime || ''}</p>
            <p>{recipe.ingredients || ''}</p>
          </>
        ) : (
          <p>Receita não encontrada.</p>
        )
      )}
    </div>
  );
}
