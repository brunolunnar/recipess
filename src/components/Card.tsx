import { CardContainer } from "@/styles/components/Card"
import Bolo from "../assets/img/bolo.jpg";
import Image from "next/image"

export const Card = ()=>{
    return (
        <CardContainer>
            <Image src={Bolo} width={200} height={200} alt="imagem de um bolo de chocolate"></Image>
            <p>tomara</p>
            <span>que de boa </span>
        </CardContainer>
    )
}