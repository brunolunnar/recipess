import { Card } from "@/components/Card";
import Modal from "@/components/modal/modal";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IRecipe {
  id: string;
  ts: number;
  ref: {
    id: string;
  };
  data: {
    name: string;
    preparation: string;
    preparationTime: string;
    ingredients: string;
  };
}

function Home() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
    <div>
      <h1>Receitas</h1>
      <button>Adicionar</button>
      <ul>
        {recipes.map((recipe) => (
            <Card  key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
