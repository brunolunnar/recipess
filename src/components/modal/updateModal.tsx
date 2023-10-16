import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  FormLabel,
  FormInput,
  SubmitButton,
} from "@/styles/components/Modal/updateModal";
import { DeleteModalButton } from "@/styles/components/Modal/deleteModal";

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

  const [newImage, setNewImage] = useState<string>("");

  const handleUpdate = async () => {
    if (validateFields()) {
      try {
        const updatedData = { ...newData, img: newImage };

        const response = await fetch(`/api/updateRecipe/${recipeId}`, {
          method: "PATCH",
          body: JSON.stringify(updatedData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          onUpdate(updatedData);
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
      !isValidPreparationTime(newData.preparationTime) ||
      !newData.ingredients ||
      !newImage
    ) {
      toast.error("Todos os campos devem ser preenchidos corretamente");
      return false;
    }
    return true;
  };

  const isValidPreparationTime = (time: string) => {
    // Utilize uma expressão regular para verificar se o tempo possui 2 dígitos numéricos.
    return /^\d{2}$/.test(time);
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

              <FormLabel htmlFor="preparationTime">Tempo de Preparo (Minutos)</FormLabel>
              <FormInput
                type="text"
                id="preparationTime"
                value={newData.preparationTime}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,2}$/.test(value)) {
                    // Use a expressão regular para verificar
                    setNewData({ ...newData, preparationTime: value });
                  }
                }}
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

              <FormLabel htmlFor="newImage">Nova imagem da receita</FormLabel>
              <FormInput
                type="text"
                id="newImage"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
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
