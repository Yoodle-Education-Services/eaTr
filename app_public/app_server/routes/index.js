const express = require('express');
const router = express.Router();
const ctrlRecipes = require('/app_api/controllers/recipes.js');

router.get('/', ctrlRecipes.shoppingList);
router.get('/recipes/:recipeid', ctrlRecipes.recipeInfo);
/*router
  .route('/recipes/:recipeid/review/new')
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);*/

module.exports = router;