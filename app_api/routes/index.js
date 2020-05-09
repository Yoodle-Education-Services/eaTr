const express = require('express');
const router = express.Router();
const ctrlRecipes = require('../controllers/recipes.js');
const ctrlShoppingList = require('../controllers/shoppingList.js');

// recipes
router
    .route('/recipes')
    //.get(ctrlRecipes.recipesList) //removed.  Will we have a sorting order for this?
    .post(ctrlRecipes.recipesCreate);

router
    .route('/recipes/:recipeid')
    .get(ctrlRecipes.recipesReadOne)
    .put(ctrlRecipes.recipesUpdateOne)
    .delete(ctrlRecipes.recipesDeleteOne);

// shopping list
router
    .route('/shoppingList')
    //.post(ctrlShoppingList.shoppingListCreate) //future use when we allow multiple shopping lists
    .get(ctrlShoppingList.shoppingListRead); //will we read the full list to the view, or use an *ngFor loop reading one item at a time, listing the completed items at the bottom?

router
    .route('/shoppingList/:shoppingListid/items/:itemid')
    .get(ctrlShoppingList.shoppingListReadOne) //see notes for shoppingListRead above
    .post(ctrlShoppingList.shoppingListCreateItem)
    .put(ctrlShoppingList.shoppingListUpdateOne)
    .delete(ctrlShoppingList.shoppingListDeleteOne);

    module.exports = router;