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
    img?: string | undefined; // Torna img opcional
  };
}

  interface IRecipeData {
    id?: string;
    name: string;
    preparation: string;
    preparationTime: string;
    ingredients: string;
    ts?: string;
    currentData?:undefined;
    img:string
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
      img:string
    };
  }
  interface IFaunaDataResponse {
    data: IRecipe[];
  }
  