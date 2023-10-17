import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/components/input";
import { globalStyle } from "@/styles/global";
import { FormContainer } from "@/styles/components/Form";
import { MainContainer, DivContainer } from "@/styles/main";
import { submitRecipe } from "@/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toastify } from "@/components/toast";
import "react-toastify/dist/ReactToastify.css";

globalStyle();
export default function Register() {
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    preparation: "",
    preparationTime: "",
    ingredients: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "preparationTime" && !/^\d{0,2}$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitRecipe(formData, setFormData, setIsSubmitting);
  };
  return (
    <>
      <Header />
      <MainContainer>
        <DivContainer>
          <h1>Registre aqui sua receita! &#128523;</h1>
          <FormContainer onSubmit={handleSubmit}>
            <Input
              label="Nome"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Modo de preparo"
              type="text"
              name="preparation"
              value={formData.preparation}
              onChange={handleChange}
            />
            <Input
              label="Foto do produto"
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
            <Input
              label="Tempo de Preparo"
              type="text"
              name="preparationTime"
              value={formData.preparationTime}
              onChange={handleChange}
            />
            <Input
              label="Ingredientes"
              type="text"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Aguarde..." : "Cadastrar Receita"}
            </button>
          </FormContainer>
        </DivContainer>
      </MainContainer>
      <Footer />
      <Toastify/>
    </>
  );
}






