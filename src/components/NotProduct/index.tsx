import { NotProductContainer } from "@/styles/components/NotProduct";
import Link from "next/link";
import Image from "next/image";
import List from "@/assets/img/list.png";


export const NotProduct = () => {
  return (
    <NotProductContainer>
      <Image src={List} width={280} height={206} alt="imagem do bolo"></Image>
      <h2>
        Você ainda não possui nenhuma receita na sua lista. Para adicionar uma,{" "}
        <Link href={"/register"}>clique aqui.</Link>
      </h2>
    </NotProductContainer>
  );
};
