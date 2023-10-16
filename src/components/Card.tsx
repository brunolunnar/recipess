import { CardContainer } from "@/styles/components/Card";
import Image from "next/image";
import Link from "next/link";
import Bolo from "@/assets/img/bolo.jpg";



export const Card = ({ recipe }: ICardProps) => {
  return (
    <CardContainer>
      {recipe.data.img ? (
        <Image
          src={recipe.data.img}
          width={150}
          height={150}
          alt="Imagem do produto"
        />
      ) : (
        <img
          src="@/assets/img/bolo.jpg"
          width={150}
          height={150}
          alt="Imagem do produto"
        />
      )}
      <div className="box">
        <div className="time-box">
          <p>
            {recipe.data.preparationTime}
            <span>Min</span>
          </p>
        </div>
        <h2>{recipe.data.name}</h2>
        <Link href={`/${recipe.id}`}>Ver receita</Link>
      </div>
    </CardContainer>
  );
};
