const express = require('express');
const router = express.Router();
const ctrlRecipes = require('../controllers/Recipes');

router.get('/', ctrlRecipes.shoppingList);
router.get('/recipes/:recipeid', ctrlLocations.locationInfo);
/*router
  .route('/recipes/:recipeid/review/new')
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);*/

module.exports = router;