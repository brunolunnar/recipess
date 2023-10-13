import {
    ModalContainer,
    ModalContent,
    ModalTitle,
    FormLabel,
    FormInput,
    SubmitButton,
  } from "@/styles/components/Modal/updateModal";
  import { useState } from "react";
  
  export default function UpdateModal({ onUpdate, isOpen, recipeId, onCancel }: any) {
    const [newData, setNewData] = useState({
      name: "",
      preparation: "",
      preparationTime: "",
      ingredients: "",
    });
  
    const handleUpdate = async () => {
      try {
        const response = await fetch(`/api/updateRecipe/${recipeId}`, {
          method: "PATCH",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          onUpdate();
        } else {
          console.error('Erro ao atualizar receita.');
        }
      } catch (error) {
        console.error('Erro na requisição de atualização:', error);
      } finally {
        onCancel();
      }
    }
  
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
                  onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                />
  
                <FormLabel htmlFor="preparation">Preparação</FormLabel>
                <FormInput
                  type="text"
                  id="preparation"
                  value={newData.preparation}
                  onChange={(e) => setNewData({ ...newData, preparation: e.target.value })}
                />
  
                <FormLabel htmlFor="preparationTime">Tempo de Preparo</FormLabel>
                <FormInput
                  type="text"
                  id="preparationTime"
                  value={newData.preparationTime}
                  onChange={(e) => setNewData({ ...newData, preparationTime: e.target.value })}
                />
  
                <FormLabel htmlFor="ingredients">Ingredientes</FormLabel>
                <FormInput
                  type="text"
                  id="ingredients"
                  value={newData.ingredients}
                  onChange={(e) => setNewData({ ...newData, ingredients: e.target.value })}
                />
  
                <SubmitButton type="button" onClick={handleUpdate}>
                  Atualizar
                </SubmitButton>
              </form>
            </ModalContent>
          </ModalContainer>
        )}
      </>
    );
  }
  