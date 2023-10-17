interface IRecipe {
  id: string;
  ts: number;
  ref: {
    id: string;
  };
  data: {
    name: string;
    preparation: string;
    preparationTime: string;
    ingredients: string;
    img?: string | undefined;
  };
}


interface ICardProps {
  recipe: IRecipe;
}


interface IRecipeData {
  id?: string;
  name: string;
  preparation: string;
  preparationTime: string;
  ingredients: string;
  ts?: string;
  currentData?: undefined;
  img: string;
}


interface UpdateModalProps {
  isOpen: boolean;
  recipeId: string | string[] | undefined;
  currentData: IRecipeData | undefined;
  onUpdate: (newData: IRecipeData) => void;
  onCancel: () => void;
}


interface IFaunaDBResponse {
  ref: {
    id: string;
  };
  ts: number;
  data: IRecipeData;
}


interface FaunaDBResponse {
  data: {
    name: string;
    preparation: string;
    preparationTime: string;
    ingredients: string;
    img: string;
  };
}


interface IFaunaDataResponse {
  data: IRecipe[];
}
