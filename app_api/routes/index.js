const express = require('express'); // is this needed since we are doing this in angular?  does the api run in express or is it only node?
const router = express.Router();
const ctrlrecipes = require('../controllers/recipes');
const ctrlshoppingList = require('../controllers/shoppingList');

// recipes
router
    .route('/recipes')
    .get(ctrlRecipes.recipeListByName)
    .post(ctrlRecipes.recipesCreate);

router
    .route('/recipes/:recipeid')
    .get(ctrlRecipes.recipesReadOne)
    .put(ctrlRecipes.recipesUpdateOne)
    .delete(ctrlRecipes.recipesDeleteOne);

// shopping list
router
    .route('/shoppingList')
    .post(ctrlshoppingList.shoppingListCreate);

router
    .route('/shoppingList/:shoppingListid')
    .get(ctrlshoppingList.shoppingListReadOne)
    .put(ctrlshoppingList.shoppingListUpdateOne)
    .delete(ctrlshoppingList.shoppingListDeleteOne);

module.exports = router;