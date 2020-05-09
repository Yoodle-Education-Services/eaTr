const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    ingredient: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    },
    unitOfMeasure: {
        type: String,
        required: false
    }
 });

 const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    ingredients: [ingredientsSchema],
    instructions: {
        type: String,
        required: true
    },
    image: ({
        img: { data: Buffer, contentType: String }
    })
});

const shoppingListSchema = new mongoose.Schema({
    ingredients: [ingredientsSchema]
});

const chefSchema = new mongoose.Schema({
    chefName: {
    type: String,
    required: true
    },
    recipes: [recipeSchema],
    shoppingList: [shoppingListSchema]
});

mongoose.model('ingredients', ingredientsSchema);
mongoose.model('recipe', recipeSchema);
mongoose.model('shoppingList', shoppingListSchema);
mongoose.model('chef', chefSchema);