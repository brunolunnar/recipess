import React, { useState } from "react";
import { useRouter } from "next/router"; // Importe o hook useRouter
import Image from "next/image";
import Logo from '@/assets/img/logo.png';
import { HeaderContainer, Container, ButtonContainer } from "@/styles/components/Header";
import { DeleteModalButton, DeleteModalCancelButton } from "@/styles/components/Modal/deleteModal";

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
        <div>
          <Image src={Logo} width={150} height={150} alt="logo do site" />
          <h1>Receitas</h1>
        </div>
        <ButtonContainer>
          <DeleteModalButton onClick={handleHome}>Home</DeleteModalButton>
          <DeleteModalCancelButton onClick={handleRegister}>
            Cadastro
          </DeleteModalCancelButton>
        </ButtonContainer>
        <form>
          <label htmlFor="search">Pesquise:</label>
          <input
            type="text"
            placeholder="Busque aqui"
            id="search"
            onChange={handleSearch}
            value={searchTerm}
          />
        </form>
      </Container>
    </HeaderContainer>
  );
};
