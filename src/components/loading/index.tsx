import Image from "next/image";
import Pulse from "@/assets/img/Pulse.svg";
import { Loadingcontainer } from "@/styles/components/Loading";
export const Loading = () => {
  return (
    <Loadingcontainer>
      <Image src={Pulse} width={150} height={150} alt="carregando..."></Image>
      <h2>Carregando...</h2>
    </Loadingcontainer>
  );
};
