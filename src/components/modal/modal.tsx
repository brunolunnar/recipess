import { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }:any) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    preparation: '',
    preparationTime: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Você pode chamar a função onSubmit aqui para enviar os dados do formulário.
    onSubmit(recipe);
    // Limpar o formulário e fechar o modal após o envio.
    setRecipe({
      name: '',
      ingredients: '',
      preparation: '',
      preparationTime: '',
    });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Fechar Modal
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Ingredientes:
            <textarea
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
            />
          </label>
          <label>
            Modo de Preparo:
            <textarea
              name="preparation"
              value={recipe.preparation}
              onChange={handleChange}
            />
          </label>
          <label>
            Tempo de Preparo:
            <input
              type="text"
              name="preparationTime"
              value={recipe.preparationTime}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
