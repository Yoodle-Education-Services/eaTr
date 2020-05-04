const express = require('express');
const router = express.Router();
const ctrlRecipes = require('../controllers/recipes');
const ctrlReviews = require('../controllers/shoppingList');

// recipes
router
  .route('/recipes')
  .get(ctrlRecipes.recipesList)
  .post(ctrlRecipes.recipesCreate);

router
  .route('/recipes/:recipeid')
  .get(ctrlRecipes.recipesReadOne)
  .put(ctrlRecipes.recipesUpdateOne)
  .delete(ctrlRecipes.recipesDeleteOne);

// shoppingList
router
  .route('/shoppingList')
  .get(ctrlShoppingList.ShoppingListRead);

router
  .route('/shoppingList/:shoppingListid/')
  .put(ctrlShoppingList.shoppingListUpdate);

router
  .route('/shoppingList/:shoppingListid/:shoppingListItemid')
  .delete(ctrlShoppingList.shoppingListDeleteOne);

module.exports = router;