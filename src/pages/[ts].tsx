import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UpdateModal from "@/components/modal/updateModal";
import { DeleteModal } from "@/components/modal/deleteModal";
import { globalStyle } from "@/styles/global";
globalStyle();
export default function Recipe() {
  const router = useRouter();
  const id = router.query.ts;
  const [recipe, setRecipe] = useState<IRecipeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

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
        setLoading(false);
      }
    }

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  const openUpdateModal = () => {
    setUpdateModalOpen(true);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleUpdate = async (newData: any) => {
    try {
      const response = await fetch(`/api/updateRecipe/${id}`, {
        method: "PATCH",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const updatedRecipe = { ...recipe, ...newData };
        setRecipe(updatedRecipe);
      } else {
        console.error('Erro ao atualizar receita.');
      }
    } catch (error) {
      console.error('Erro na requisição de atualização:', error);
    } finally {
      setUpdateModalOpen(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/deleteRecipe/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error('Erro ao excluir receita.');
      }
    } catch (error) {
      console.error('Erro na requisição de exclusão:', error);
    } finally {
      setDeleteModalOpen(false);
    }
  };

  return (
    <>
      <Header />

      <div>
        <button onClick={openUpdateModal}>Atualizar</button>
        <button onClick={openDeleteModal}>Deletar</button>
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
      <UpdateModal isOpen={isUpdateModalOpen} onUpdate={handleUpdate} onCancel={() => setUpdateModalOpen(false)} recipeId={id} />
      <DeleteModal isOpen={isDeleteModalOpen} onDelete={handleDelete} onCancel={() => setDeleteModalOpen(false)} />
    </>
  );
}
