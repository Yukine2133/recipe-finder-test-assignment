export interface SearchParamsType {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes?: number;
}

export interface Ingredient {
  id: number;
  name: string;
  original: string;
  amount: number;
  unit: string;
}

export interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  summary: string;
  instructions: string;
  extendedIngredients: Ingredient[];
}
