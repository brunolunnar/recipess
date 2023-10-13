import {
  DeleteModalContainer,
  DeleteModalContent,
  DeleteModalTitle,
  DeleteModalText,
  DeleteModalButtonContainer,
  DeleteModalButton,
  DeleteModalCancelButton,
} from "@/styles/components/Modal/deleteModal";
import { useState } from "react";

export const DeleteModal = ({ isOpen, onDelete, onCancel }: any) => {
  return (
    <>
      {isOpen && (
        <DeleteModalContainer>
          <DeleteModalContent>
            <DeleteModalTitle>Confirmar Exclusão</DeleteModalTitle>
            <DeleteModalText>Tem certeza que quer excluir essa receita?</DeleteModalText>
            <DeleteModalButtonContainer>
              <DeleteModalButton onClick={onDelete}>Confirmar</DeleteModalButton>
              <DeleteModalCancelButton onClick={onCancel}>Cancelar</DeleteModalCancelButton>
            </DeleteModalButtonContainer>
          </DeleteModalContent>
        </DeleteModalContainer>
      )}
    </>
  );
};
