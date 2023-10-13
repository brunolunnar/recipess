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
      <Image
        src={Bolo}
        width={150}
        height={150}
        alt="imagem de um bolo"
      ></Image>
      <div className="box">
        <div className="time-box">
          <p>{recipe.data.preparationTime}</p>
        </div>
        <h2>{recipe.data.name}</h2>
        <Link href={`/${recipe.id}`}>Ver receita</Link>
      </div>
    </CardContainer>
  );
};
