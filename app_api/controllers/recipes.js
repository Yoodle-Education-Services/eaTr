const mongoose = require('mongoose');
const Rec = mongoose.model('Recipe');


// recipesCreate controller
const recipesCreate = (req, res) => {
  //create method to the model
  

  //ingredients like facilities .... maximum ingredients to add in

  //callback function containing appropriate responses for success and failure

};



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