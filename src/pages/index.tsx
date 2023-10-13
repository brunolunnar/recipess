import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { globalStyle } from "@/styles/global";
import { MainContainer } from "@/styles/main";
import React, { useEffect, useState } from "react";

globalStyle();
function Home() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/getRecipe");
        const data = await response.json();
        setRecipes(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
     <Header/>
      <MainContainer>
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </MainContainer>
    </>
  );
}

export default Home;
