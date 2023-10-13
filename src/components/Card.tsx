import { CardContainer } from "@/styles/components/Card";
import Bolo from "../assets/img/bolo.jpg";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";



interface ICardProps {
  recipe: IRecipe;
}

export const Card = ({ recipe }: ICardProps) => {
  return (
    <CardContainer>
      <Image
        src={recipe.data.img!}
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
