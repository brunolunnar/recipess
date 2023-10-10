import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    preparation: "",
    preparationTime: "",
    ingredients: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

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
    }
  };

  return (
    <>
      <h1>Oi eu sou um registro de receitas</h1>
      {alertMessage && <p>{alertMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="preparation"
          name="preparation"
          value={formData.preparation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="preparationTime"
          name="preparationTime"
          value={formData.preparationTime}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar Receita</button>
      </form>
    </>
  );
}
