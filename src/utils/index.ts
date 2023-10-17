// apiUtils.ts

import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface FormData {
  img: string;
  name: string;
  preparation: string;
  preparationTime: string;
  ingredients: string;
}


//POST
export async function submitRecipe(
  formData: FormData,
  setFormData: Dispatch<SetStateAction<FormData>>,
  setIsSubmitting: Dispatch<SetStateAction<boolean>>
) {
  if (
    formData.name === "" ||
    formData.preparation === "" ||
    formData.preparationTime === "" ||
    formData.ingredients === ""
  ) {
  
    toast.error("Por favor, preencha todos os campos.");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/createRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
   
      toast.success("Receita cadastrada com sucesso!");
      setFormData({
        img: "",
        name: "",
        preparation: "",
        preparationTime: "",
        ingredients: "",
      });
    } else {

      toast.error("Erro ao cadastrar receita.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);

    toast.error("Erro na requisição.");
  } finally {
    setIsSubmitting(false);
  }
}
