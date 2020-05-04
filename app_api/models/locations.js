const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
  ingredient: {
    type: String,
    required: true
  },
  quantity: {
  Number,
  required: true
  },
  unitOfMeasure: String,
  required: false
});

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true
  },
  ingredients: [ingredientsSchema],
  instructionsSchema: {
    type: String,
    required: true
  },
  image: ({
  img: { data: Buffer, contentType: String }
}),
});

const shoppingListSchema = new mongoose.Schema({
  ingredientsSchema
});

const chefSchema = new mongoose.Schema({
  chefName: {
  type: String,
  required: true
  }
});

mongoose.model('Recipe', recipeSchema);