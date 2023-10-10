import { CardContainer } from "@/styles/components/Card";
import Bolo from "../assets/img/bolo.jpg";
import Image from "next/image";
import Link from "next/link";

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

interface ICardProps {
  recipe: IRecipe;
}

export const Card = ({ recipe }: ICardProps) => {
  return (
    <CardContainer>
      <h2>{recipe.data.name}</h2>
      <p>{recipe.id}</p>
      <p>{recipe.data.preparation}</p>
      <p>Tempo de preparo: {recipe.data.preparationTime}</p>
      <p>Ingredientes: {recipe.data.ingredients}</p>
      <Link href={`/${recipe.id}`}>Ver mais</Link>
    </CardContainer>
  );
};
