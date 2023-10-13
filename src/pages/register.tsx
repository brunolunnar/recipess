import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormContainer } from "@/styles/components/Form";
import { globalStyle } from "@/styles/global";
import { DivContainer, MainContainer } from "@/styles/main";
import React, { ChangeEvent, FormEvent, useState } from "react";

globalStyle();

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    preparation: "",
    preparationTime: "",
    ingredients: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Novo estado

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar se todos os campos estão preenchidos
    if (
      formData.name === "" ||
      formData.preparation === "" ||
      formData.preparationTime === "" ||
      formData.ingredients === ""
    ) {
      setAlertMessage("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true); // Ative ao enviar o formulário

    try {
      const response = await fetch("/api/createRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Receita cadastrada com sucesso!");
        setAlertMessage("Receita cadastrada com sucesso!");
        setFormData({
          name: "",
          preparation: "",
          preparationTime: "",
          ingredients: "",
        });
      } else {
        console.error("Erro ao cadastrar receita.");
        setAlertMessage("Erro ao cadastrar receita.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setAlertMessage("Erro na requisição.");
    } finally {
      setIsSubmitting(false); // Desative após a conclusão da solicitação
    }
  };

  return (
    <>
      <Header />
      <MainContainer>
        <DivContainer>
          <h1>Registre aqui sua receita! &#128523;</h1>
          {alertMessage && <p>{alertMessage}</p>}
          <FormContainer onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="preparation">Modo de preparo</label>
            <input
              type="text"
              name="preparation"
              value={formData.preparation}
              onChange={handleChange}
            />

            <label htmlFor="preparationTime">Tempo de Preparo</label>
            <input
              type="text"
              name="preparationTime"
              value={formData.preparationTime}
              onChange={handleChange}
            />

            <label htmlFor="ingredients">Ingredientes</label>
            <input
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
    </>
  );
}
