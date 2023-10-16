import React, { useState } from "react";
import { useRouter } from "next/router"; // Importe o hook useRouter
import Image from "next/image";
import Logo from '@/assets/img/logo.png';
import { HeaderContainer, Container, ButtonContainer } from "@/styles/components/Header";
import {  DeleteModalCancelButton } from "@/styles/components/Modal/deleteModal";

export const Header = ({ items }:any) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleHome = () => {
    router.push("/");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  const handleSearch = (event: { target: { value: any; }; }) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);

    // Filtrar os itens com base no texto de pesquisa
    const filtered = items.filter((item: { name: string; }) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredItems(filtered);
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
