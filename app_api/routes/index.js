const express = require('express');
const router = express.Router();
const ctrlChef = require('../controllers/chef.js');
const ctrlRecipes = require('../controllers/recipes.js');
const ctrlShoppingList = require('../controllers/shoppingList.js');

router
    .route('/chef')
    .post(ctrlChef.chefCreate);

router
    .route('/chef/:chefid')
    .get(ctrlChef.chefReadOne)
    .put(ctrlChef.chefUpdateOne)
    .delete(ctrlChef.chefDeleteOne);

// recipes
router
    .route('/chef/:chefid/recipe')
    //.get(ctrlRecipes.recipesList) //removed.  Will we have a sorting order for this?
    .post(ctrlRecipes.recipesCreate);

router
    .route('/chef/:chefid/recipe/:recipeid')
    .get(ctrlRecipes.recipesReadOne)
    .put(ctrlRecipes.recipesUpdateOne)
    .delete(ctrlRecipes.recipesDeleteOne);

// shopping list
router
    .route('/chef/:chefid/shoppingList')
    .post(ctrlShoppingList.shoppingListCreateList);

router
    .route('/chef/:chefid/shoppingList/:shoppingListid')
    .get(ctrlShoppingList.shoppingListReadList) //will we read the full list to the view, or use an *ngFor loop reading one item at a time, listing the completed items at the bottom?
    .put(ctrlShoppingList.shoppingListUpdateList)
    .delete(ctrlShoppingList.shoppingListDeleteList);

    // shopping list items
router
    .route('/chef/:chefid/shoppingList/:shoppingListid/item')
    .post(ctrlShoppingList.shoppingListCreateItem)
    .post(ctrlShoppingList.shoppingListAddFullRecipe);

router
    .route('/chef/5eb7b803b2882326ec7ff0cd/shoppingList/5eb7bb14689a7813d445ac2f/item/:itemid')
    .get(ctrlShoppingList.shoppingListReadOne) //see notes for shoppingListRead above
    .put(ctrlShoppingList.shoppingListUpdateOne)
    .delete(ctrlShoppingList.shoppingListDeleteOne);

    module.exports = router;