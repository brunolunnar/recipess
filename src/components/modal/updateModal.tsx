import { DeleteModalButton, DeleteModalCancelButton } from "@/styles/components/Modal/deleteModal";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  FormLabel,
  FormInput,
  SubmitButton,
} from "@/styles/components/Modal/updateModal";
import { useState } from "react";
import { toast } from "react-toastify";

export default function UpdateModal({
  isOpen,
  recipeId,
  currentData,
  onUpdate,
  onCancel,
}: UpdateModalProps) {
  const [newData, setNewData] = useState<IRecipeData>(
    currentData || {
      name: "",
      preparation: "",
      preparationTime: "",
      ingredients: "",
      img: "",
    }
  );

  const handleUpdate = async () => {
    if (validateFields()) {
      try {
        const response = await fetch(`/api/updateRecipe/${recipeId}`, {
          method: "PATCH",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          onUpdate(newData);
        } else {
          console.error("Erro ao atualizar receita.");
        }
      } catch (error) {
        console.error("Erro na requisição de atualização:", error);
      } finally {
        onCancel();
      }
    }
  };

  const validateFields = () => {
    if (
      !newData.name ||
      !newData.preparation ||
      !newData.preparationTime ||
      !newData.ingredients
    ) {
      toast.error("Todos os campos devem ser preenchidos");
      return false;
    }
    return true;
  };

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Atualizar Receita</ModalTitle>
            <form>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput
                type="text"
                id="name"
                value={newData.name}
                onChange={(e) =>
                  setNewData({ ...newData, name: e.target.value })
                }
              />

              <FormLabel htmlFor="preparation">Preparação</FormLabel>
              <FormInput
                type="text"
                id="preparation"
                value={newData.preparation}
                onChange={(e) =>
                  setNewData({ ...newData, preparation: e.target.value })
                }
              />

              <FormLabel htmlFor="preparationTime">Tempo de Preparo</FormLabel>
              <FormInput
                type="text"
                id="preparationTime"
                value={newData.preparationTime}
                onChange={(e) =>
                  setNewData({ ...newData, preparationTime: e.target.value })
                }
              />

              <FormLabel htmlFor="ingredients">Ingredientes</FormLabel>
              <FormInput
                type="text"
                id="ingredients"
                value={newData.ingredients}
                onChange={(e) =>
                  setNewData({ ...newData, ingredients: e.target.value })
                }
              />
              <div className="buttons-box">
                <SubmitButton type="button" onClick={handleUpdate}>
                  Atualizar
                </SubmitButton>
                <DeleteModalButton type="button" onClick={onCancel}>
                  Cancelar
                </DeleteModalButton>
              </div>
            </form>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
