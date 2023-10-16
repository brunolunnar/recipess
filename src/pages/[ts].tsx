import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UpdateModal from "@/components/modal/updateModal";
import { DeleteModal } from "@/components/modal/deleteModal";
import { globalStyle } from "@/styles/global";
import { toast } from "react-toastify";
import { Toastify } from "@/components/toast";
import "react-toastify/dist/ReactToastify.css";
import { MainRecipeIdContainer } from "@/styles/recipeId";
import { Footer } from "@/components/Footer";
import Bolo from "../assets/img/bolo.jpg";
import Image from "next/image";
import {
  DeleteModalButton,
  DeleteModalCancelButton,
} from "@/styles/components/Modal/deleteModal";
import { Loading } from "@/components/loading";

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
            console.error("Erro ao buscar receita.");
          }
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
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
        toast.success("Receita atualizada com sucesso");
      } else {
        console.error("Erro ao atualizar receita.");
        toast.error("Erro ao atualizar receita");
      }
    } catch (error) {
      console.error("Erro na requisição de atualização:", error);
      toast.error("Erro na requisição de atualização");
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
        toast.success("Receita excluída com sucesso");
      } else {
        console.error("Erro ao excluir receita.");
        toast.error("Erro ao excluir receita");
      }
    } catch (error) {
      console.error("Erro na requisição de exclusão:", error);
      toast.error("Erro na requisição de exclusão");
    } finally {
      setDeleteModalOpen(false);
    }
  };

  return (
    <>
      <Header items={undefined} />

      {loading ? (
        <Loading />
      ) : recipe ? (
        <MainRecipeIdContainer>
          <Image
            src={recipe.img}
            width={500}
            height={306}
            alt="imagem do bolo"
          ></Image>

          <h1 className="title">{recipe.name}</h1>
          <div className="buttons-box">
            <DeleteModalCancelButton onClick={openUpdateModal}>
              Atualizar
            </DeleteModalCancelButton>
            <DeleteModalButton onClick={openDeleteModal}>
              Deletar
            </DeleteModalButton>
          </div>
          <div className="information-box">
            <div className="prep">
              <h2>Modo de preparo</h2>
              <p>{recipe.preparation || ""}</p>
            </div>
            <div className="ingri">
              <h2>Tempo de preparo</h2>
              <p>{recipe.preparationTime || ""}</p>
              <h2>Ingredientes</h2>
              <p>{recipe.ingredients || ""}</p>
            </div>
          </div>
        </MainRecipeIdContainer>
      ) : (
        <p>Receita não encontrada.</p>
      )}

      <UpdateModal
        isOpen={isUpdateModalOpen}
        onUpdate={handleUpdate}
        onCancel={() => setUpdateModalOpen(false)}
        recipeId={id}
        currentData={undefined}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onDelete={handleDelete}
        onCancel={() => setDeleteModalOpen(false)}
      />
      <Toastify></Toastify>
      <Footer />
    </>
  );
}
