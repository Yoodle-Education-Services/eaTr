const mongoose = require('mongoose');
const Rec = mongoose.model('Recipe');


// recipesCreate controller
//note sure of recipesCreate ???
/*const recipesCreate=(req, res) =>{
  Rec.create({
    recipeName: req.body.recipeName,
    recipeImage:req.body.recipeImage, 
    recipeInstructions:req.body.instructions, //Does this also need a function?
    //create a function - ingredient function calls ingredient name, measurement
    // This is what visual code suggested --------
    recipeIngredients:[{
      //ingredient name - string - required
      ingredientName: req.body.ingredientName1,
      get ingredientName() {
        return this.ingredientName;
      },
      set ingredientName(value) {
        this.ingredientName = value;
      },
      //ingredient quantity - number- required
      ingredientQuantity: req.body.ingredientQuantity1,
        get ingredientQuantity() {
          return this.ingredientQuantity;
        },
        set ingredientQuantity(value) {
          this.ingredientQuantity = value;
        },

     //ingredient unitofMeasure - string- not required ?? Do we want to require this?
      ingredientUnitofMeasure: req.body.ingredientUnitofMeasure1,
      get ingredientUnitofMeasure(){
          return this.ingredientUnitofMeasure;
        },
        set ingredientUnitofMeasure(value) {
          this.ingredientUnitofMeasure = value;
        }
    ]
  };
  recipe.save((err,rec)=>{
    if (err){
      res
      .status(404)
      .json(err);
    } else{
      res
      .status(200)
      .json(rec);
    }
};*/

// recipesReadOne controller
const recipesReadOne = (req, res) => {
    Rec
      .findById(req.params.recipeid)
      .exec((err, recipe) => {
        if (!recipe) {
          return res
            .status(404)
            .json({
              "message": "recipe not found"
            });
        } else if (err) {
          return res
            .status(404)
            .json(err);
        } else {
          return res
            .status(200)
            .json(recipe);
        }
      });
};

/* const recipesUpdateOne = (req, res) => {
  if (!req.params.recipeid) {
    return res
      .status(404)
      .json({
        "message": "Not found, recipeid is required"
      });
  }
  Rec
    .findById(req.params.recipeid)
    .select('-ingredients')
    .exec((err, recipe) => {
      if (!recipe) {
        return res
          .status(404)
          .json({
            "message": "recipeid not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      recipe.name = req.body.name;
      recipe.ingredient = req.body.ingredient;
      recipe.unitOfMeasure = req.body.unitOfMeasure;
      ];
      recipe.Ingredients = [{
        item: req.body.item1,
        quantity: req.body.quantity1,
        unitOfMeasure: req.body.unitOfMeasure1
      }, {
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2,
      }];
      recipe.save((err, rec) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(rec);
        }
      });
    }
  );
};*/

/*const recipesDeleteOne = (req, res) => {
  const {recipeid} = req.params;
  if (recipeid) {
    Rec
      .findByIdAndRemove(recipeid)
      .exec((err, recipe) => {
          if (err) {
            return res
              .status(404)
              .json(err);
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No Recipe"
      });
  }
};*/


//
module.exports = {
//  recipesCreate,
  recipesReadOne,
//  recipesUpdateOne,
//  recipesDeleteOne
};
