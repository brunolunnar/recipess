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
  }

  
  interface IFaunaDBResponse {
    ref: {
      id: string;
    };
    ts: number;
    data: IRecipeData;
  }