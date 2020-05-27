export class Ingredients {
  ingredient: string;
  quantity: number;
  unitOfMeasure: string;
}

export class Recipe {
  recipeName: string;
  instructions: string;
  ingredients: string;
}

export class Chef {
    _id: string;
    chefName: string;
    recipes: any[];
  }