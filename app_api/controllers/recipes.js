const mongoose = require('mongoose');
const Rec = mongoose.model('Recipe');

// recipesCreate controller
const recipesCreate=(req, res) =>{
  Rec.create({
    recipeName: req.body.recipeName,
    recipeImage:req.body.recipeImage,
    ingredients:{
      ingredient1:req.body.ingredient1,
      ingredient2:req.body.ingredient2,
      ingredient3:req.body.ingredient3,
      ingredient4:req.body.ingredient4,
      ingredient5:req.body.ingredient5
     //loop function is better
    },(err, recipe) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(recipe);
      }
    };
   
  });
}




// recipesReadOne controller
const recipesReadOne = (req, res) => {
    Rec
      .findById(req.params.recipeid)
      .exec((err, Recipe) => {
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
        }
        res
          .status(200)
          .json(recipe);
       });
};


// recipesUpdateOne
const recipesUpdateOne = (req, res) => {
  
};

// recipesDeleteOne
const recipesDeleteOne = (req, res) =>  {
  const {recipeid} = req.params;
  if (recipeid) {
    Rec      
    .findByIdAndRemove(recipeid)
      .exec((err, Recipe) =>  {
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
};


//
module.exports = {
  recipesCreate,
  recipesReadOne,
  recipesUpdateOne,
  recipesDeleteOne
};
