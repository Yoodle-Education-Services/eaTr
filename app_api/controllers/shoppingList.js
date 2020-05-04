const mongoose = require('mongoose');
const Rec = mongoose.model('Recipe');

/* const doSetAverageRating = (location) => {
  if (location.reviews && location.reviews.length > 0) {
    const count = location.reviews.length;
    const total = location.reviews.reduce((acc, {rating}) => {
      return acc + rating;
    }, 0);

    location.rating = parseInt(total / count, 10);
    location.save(err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Average rating updated to ${location.rating}`);
      }
    });
  }
};

const updateAverageRating = (locationId) => {
  Loc.findById(locationId)
    .select('rating reviews')
    .exec((err, location) => {
      if (!err) {
        doSetAverageRating(location);
      }
    });
}; */

const doAddIngredient = (req, res, recipe) => {
  if (!recipe) {
    res
      .status(404)
      .json({"message": "Recipe not found"});
  } else {
    const {ingredient, quantity, unitOfMeasure} = req.body;
    recipe.ingredients.push({
      ingredient,
      quantity,
      unitOfMeasure
    });
    shoppingList.save((err, shoppingList) => {
      if (err) {
        res
          .status(400)
          .json(err);
      }
    });
  }
};

const shoppingListCreate = (req, res) => {
  const recipeId = req.params.recipeid;
  if (recipeId) {
    Rec
      .findById(recipeId)
      .select('ingredient')
      .exec((err, recipe) => {
        if (err) {
          res
            .status(400)
            .json(err);
        } else {
          doAddIngredient(req, res, shoppingList);
        }
      });
  } else {
    res
      .status(404)
      .json({"message": "Recipe not found"});
  }
};

const shoppingListRead = (req, res) => {
  Rec
    .findById(req.params.recipeid)
    .select([ingredientsSchema])
    .exec((err, recipe) => {
      if (!recipe) {
        return res
          .status(404)
          .json({"message": "Recipe not found"});
      } else if (err) {
        return res
          .status(400)
          .json(err);
      };
      if (recipe.ingredient && recipe.ingredients.length > 0) {
        const ingredient = recipe.ingredients.id(req.params.ingredientid);
        if (!ingredient) {
          return res
            .status(404)
            .json({"message": "Ingredients not found"});
        } else {
          const response = {
            recipe: {
              name: recipe.name,
              id: req.params.recipeid
            },
            ingredient
          };
          return res
            .status(200)
            .json(response);
        }
    };
});
};

const shoppingListUpdate = (req, res) => {
  if (!req.params.ingredientid) {
    return res
      .status(404)
      .json({
        "message": "Not found, ingredientid required"
      });
  }
  Rec
    .findById(req.params.recipeid)
    .select([ingredientsSchema])
    .exec((err, recipe) => {
      if (!recipe) {
        return res
          .status(404)
          .json({
            "message": "Recipe not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      if (recipe.ingredients && recipe.ingredients.length > 0) {
        const thisIngredient = recipe.ingredients.id(req.params.ingredientid);
        if (!thisIngredient) {
          res
            .status(404)
            .json({
              "message": "Ingredient not found"
            });
        } else {
          thisIngredient.item = req.body.item;
          thisIngredient.quantity = req.body.quantity;
          thisIngredient.unitOfMeasure = req.body.unitOfMeasure;
          recipe.save((err, recipe) => {
            if (err) {
              res
                .status(404)
                .json(err);
            } 
          });
        }
      } else {
        res
          .status(404)
          .json({
            "message": "No ingredient to update"
          });
      }
    }
  );
};

const shoppingListDeleteOneItem = (req, res) => {
  const {shoppingListItemid} = req.params;
  if (!shoppingListItemid) {
    return res
      .status(404)
      .json({'message': 'Not found, shoppingListItemid required'});
  }
/*  Rec
    .findById(recipeid)
    .select([ingredientsSchema])
    .exec((err, recipe) => {
      if (!recipe) {
        return res
          .status(404)
          .json({'message': 'Recipe not found'});
      } else if (err) {
        return res
          .status(400)
          .json(err);
      } */
      if (shoppingList.ingredients && shoppingList.ingredients.length > 0) {
        if (!shoppingList.ingredients.id(ingredientid)) {
          return res
            .status(404)
            .json({'message': 'Ingredient not found'});
        } else {
          shoppingList.ingredients.id(ingredientid).remove();
          shoppingList.save(err => {
            if (err) {
              return res
                .status(404)
                .json(err);
            } else {
              res
                .status(404)
                .json({'message': 'No ingredient to delete'});
            }
          });
        };
      };
};

module.exports = {
  shoppingListCreate,
  shoppingListRead,
  shoppingListUpdate,
  shoppingListDeleteOneItem,
  shoppingListDelete
};