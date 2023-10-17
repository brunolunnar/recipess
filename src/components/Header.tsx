import React, { useState } from "react";
import { useRouter } from "next/router";
import { HeaderContainer, Container, ButtonContainer } from "@/styles/components/Header";
import {  DeleteModalCancelButton } from "@/styles/components/Modal/deleteModal";

export const Header = ({ items }:any) => {
  const router = useRouter();
  
  const handleHome = () => {
    router.push("/");
  };
  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <HeaderContainer>
      <Container>
        <div className="box">
          <h1 onClick={handleHome}>Next Receitas</h1>
        </div>
        <ButtonContainer>
          <DeleteModalCancelButton onClick={handleRegister}>
            Cadastre uma receita
          </DeleteModalCancelButton>
        </ButtonContainer>
      </Container>
    </HeaderContainer>
  );
};




    
    

