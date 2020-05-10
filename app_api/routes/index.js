const express = require('express');
const router = express.Router();
const ctrlRecipes = require('../controllers/recipes.js');
const ctrlShoppingList = require('../controllers/shoppingList.js');

// recipes
router
    .route('/chef/5eb78cacc0804ff90645cc51/recipes')
    //.get(ctrlRecipes.recipesList) //removed.  Will we have a sorting order for this?
    .post(ctrlRecipes.recipesCreate);

router
    .route('/chef/5eb78cacc0804ff90645cc51/recipes/:recipeid')
    .get(ctrlRecipes.recipesReadOne)
    .put(ctrlRecipes.recipesUpdateOne)
    .delete(ctrlRecipes.recipesDeleteOne);

// shopping list
router
    .route('/chef/5eb78cacc0804ff90645cc51/shoppingList')
    .post(ctrlShoppingList.shoppingListCreateList);

router
    .route('/chef/5eb78cacc0804ff90645cc51/shoppingList/:shoppingListid')
    .get(ctrlShoppingList.shoppingListReadList) //will we read the full list to the view, or use an *ngFor loop reading one item at a time, listing the completed items at the bottom?
    .put(ctrlShoppingList.shoppingListUpdateList)
    .delete(ctrlShoppingList.shoppingListDeleteList);

    // shopping list items
router
    .route('/chef/5eb78cacc0804ff90645cc51/shoppingList/5eb7976e4c12703e647032e9/item')
    .post(ctrlShoppingList.shoppingListCreateItem)
    .post(ctrlShoppingList.shoppingListAddFullRecipe);

router
    .route('/chef/5eb78cacc0804ff90645cc51/shoppingList/5eb7976e4c12703e647032e9/item/:itemid')
    .get(ctrlShoppingList.shoppingListReadOne) //see notes for shoppingListRead above
    .put(ctrlShoppingList.shoppingListUpdateOne)
    .delete(ctrlShoppingList.shoppingListDeleteOne);

    module.exports = router;