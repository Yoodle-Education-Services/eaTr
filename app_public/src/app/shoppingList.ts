export class ShoppingList {
  item: string;
  quantity: number;
  unitOfMeasure: string;
}

export class Recipe {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  image: ImageData;
}

export class Chef {
  chefName: string;
}