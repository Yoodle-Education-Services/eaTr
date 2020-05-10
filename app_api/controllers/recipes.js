const mongoose = require('mongoose');
const Rec = mongoose.model('recipe');


//Create
const recipesCreate = (req, res) => {
    Rec.create({
        recipeName: req.body.recipeName,
        instructions: req.body.instructions,
        image: req.body.image,
        ingredients: [  //ingredient section collapsed for easier editing
            {
                ingredient: req.body.ingredient1,
                quantity: req.body.quantity1,
                unitOfMeasure: req.body.unitOfMeasure1
            },
            {
                ingredient: req.body.ingredient2,
                quantity: req.body.quantity2,
                unitOfMeasure: req.body.unitOfMeasure2
            },
            {
                ingredient: req.body.ingredient3,
                quantity: req.body.quantity3,
                unitOfMeasure: req.body.unitOfMeasure3
            },
            {
                ingredient: req.body.ingredient4,
                quantity: req.body.quantity4,
                unitOfMeasure: req.body.unitOfMeasure4
            },
            {
                ingredient: req.body.ingredient5,
                quantity: req.body.quantity5,
                unitOfMeasure: req.body.unitOfMeasure5
            },
            {
                ingredient: req.body.ingredient6,
                quantity: req.body.quantity6,
                unitOfMeasure: req.body.unitOfMeasure6
            },
            {
                ingredient: req.body.ingredient7,
                quantity: req.body.quantity7,
                unitOfMeasure: req.body.unitOfMeasure7
            },
            {
                ingredient: req.body.ingredient8,
                quantity: req.body.quantity8,
                unitOfMeasure: req.body.unitOfMeasure8
            },
            {
                ingredient: req.body.ingredient9,
                quantity: req.body.quantity9,
                unitOfMeasure: req.body.unitOfMeasure9
            },
            {
                ingredient: req.body.ingredient10,
                quantity: req.body.quantity10,
                unitOfMeasure: req.body.unitOfMeasure10
            },
            {
                ingredient: req.body.ingredient11,
                quantity: req.body.quantity11,
                unitOfMeasure: req.body.unitOfMeasure11
            },
            {
                ingredient: req.body.ingredient12,
                quantity: req.body.quantity12,
                unitOfMeasure: req.body.unitOfMeasure12
            },
            {
                ingredient: req.body.ingredient13,
                quantity: req.body.quantity13,
                unitOfMeasure: req.body.unitOfMeasure13
            },
            {
                ingredient: req.body.ingredient14,
                quantity: req.body.quantity14,
                unitOfMeasure: req.body.unitOfMeasure14
            },
            {
                ingredient: req.body.ingredient15,
                quantity: req.body.quantity15,
                unitOfMeasure: req.body.unitOfMeasure15
            },
            {
                ingredient: req.body.ingredient16,
                quantity: req.body.quantity16,
                unitOfMeasure: req.body.unitOfMeasure16
            },
            {
                ingredient: req.body.ingredient17,
                quantity: req.body.quantity17,
                unitOfMeasure: req.body.unitOfMeasure17
            },
            {
                ingredient: req.body.ingredient18,
                quantity: req.body.quantity18,
                unitOfMeasure: req.body.unitOfMeasure18
            },
            {
                ingredient: req.body.ingredient19,
                quantity: req.body.quantity19,
                unitOfMeasure: req.body.unitOfMeasure19
            },
            {
                ingredient: req.body.ingredient20,
                quantity: req.body.quantity20,
                unitOfMeasure: req.body.unitOfMeasure20
            },
            {
                ingredient: req.body.ingredient21,
                quantity: req.body.quantity21,
                unitOfMeasure: req.body.unitOfMeasure21
            },
            {
                ingredient: req.body.ingredient22,
                quantity: req.body.quantity22,
                unitOfMeasure: req.body.unitOfMeasure22
            },
            {
                ingredient: req.body.ingredient23,
                quantity: req.body.quantity23,
                unitOfMeasure: req.body.unitOfMeasure23
            },
            {
                ingredient: req.body.ingredient24,
                quantity: req.body.quantity24,
                unitOfMeasure: req.body.unitOfMeasure24
            },
            {
                ingredient: req.body.ingredient25,
                quantity: req.body.quantity25,
                unitOfMeasure: req.body.unitOfMeasure25
            }
        ]
    },
    (err, recipe) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                res
                    .status(201)
                    .json(recipe);
            }
    });
 };

 //Read
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

 //Update
const recipesUpdateOne = (req, res) => {
    if (!req.params.recipeid) {
        return res
            .status(404)
            .json({
                "message": "Not found, recipeid is required"
            });
    }
    Rec
        .findById(req.params.recipeid)
        .select('recipes')
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
        recipe.recipeName = req.body.recipeName;
        recipe.instructions = req.body.instructions;
        recipe.image = req.body.image;
        recipe.ingredients = [{  //ingredient section collapsed for easier editing
            ingredient: req.body.ingredient1,
            quantity: req.body.quantity1,
            unitOfMeasure: req.body.unitOfMeasure1
        },
        {
            ingredient: req.body.ingredient2,
            quantity: req.body.quantity2,
            unitOfMeasure: req.body.unitOfMeasure2
        },
        {
            ingredient: req.body.ingredient3,
            quantity: req.body.quantity3,
            unitOfMeasure: req.body.unitOfMeasure3
        },
        {
            ingredient: req.body.ingredient4,
            quantity: req.body.quantity4,
            unitOfMeasure: req.body.unitOfMeasure4
        },
        {
            ingredient: req.body.ingredient5,
            quantity: req.body.quantity5,
            unitOfMeasure: req.body.unitOfMeasure5
        },
        {
            ingredient: req.body.ingredient6,
            quantity: req.body.quantity6,
            unitOfMeasure: req.body.unitOfMeasure6
        },
        {
            ingredient: req.body.ingredient7,
            quantity: req.body.quantity7,
            unitOfMeasure: req.body.unitOfMeasure7
        },
        {
            ingredient: req.body.ingredient8,
            quantity: req.body.quantity8,
            unitOfMeasure: req.body.unitOfMeasure8
        },
        {
            ingredient: req.body.ingredient9,
            quantity: req.body.quantity9,
            unitOfMeasure: req.body.unitOfMeasure9
        },
        {
            ingredient: req.body.ingredient10,
            quantity: req.body.quantity10,
            unitOfMeasure: req.body.unitOfMeasure10
        },
        {
            ingredient: req.body.ingredient11,
            quantity: req.body.quantity11,
            unitOfMeasure: req.body.unitOfMeasure11
        },
        {
            ingredient: req.body.ingredient12,
            quantity: req.body.quantity12,
            unitOfMeasure: req.body.unitOfMeasure12
        },
        {
            ingredient: req.body.ingredient13,
            quantity: req.body.quantity13,
            unitOfMeasure: req.body.unitOfMeasure13
        },
        {
            ingredient: req.body.ingredient14,
            quantity: req.body.quantity14,
            unitOfMeasure: req.body.unitOfMeasure14
        },
        {
            ingredient: req.body.ingredient15,
            quantity: req.body.quantity15,
            unitOfMeasure: req.body.unitOfMeasure15
        },
        {
            ingredient: req.body.ingredient16,
            quantity: req.body.quantity16,
            unitOfMeasure: req.body.unitOfMeasure16
        },
        {
            ingredient: req.body.ingredient17,
            quantity: req.body.quantity17,
            unitOfMeasure: req.body.unitOfMeasure17
        },
        {
            ingredient: req.body.ingredient18,
            quantity: req.body.quantity18,
            unitOfMeasure: req.body.unitOfMeasure18
        },
        {
            ingredient: req.body.ingredient19,
            quantity: req.body.quantity19,
            unitOfMeasure: req.body.unitOfMeasure19
        },
        {
            ingredient: req.body.ingredient20,
            quantity: req.body.quantity20,
            unitOfMeasure: req.body.unitOfMeasure20
        },
        {
            ingredient: req.body.ingredient21,
            quantity: req.body.quantity21,
            unitOfMeasure: req.body.unitOfMeasure21
        },
        {
            ingredient: req.body.ingredient22,
            quantity: req.body.quantity22,
            unitOfMeasure: req.body.unitOfMeasure22
        },
        {
            ingredient: req.body.ingredient23,
            quantity: req.body.quantity23,
            unitOfMeasure: req.body.unitOfMeasure23
        },
        {
            ingredient: req.body.ingredient24,
            quantity: req.body.quantity24,
            unitOfMeasure: req.body.unitOfMeasure24
        },
        {
            ingredient: req.body.ingredient25,
            quantity: req.body.quantity25,
            unitOfMeasure: req.body.unitOfMeasure25
        }];
        recipe.save((err, Rec) => {
            if (err) {
            res
                .status(404)
                .json(err);
            } else {
            res
                .status(200)
                .json(Rec);
            }
        });
    }
  );
};

const recipesDeleteOne = (req, res) => {
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
        "message": "No Item Found"
      });
  }
 };

module.exports ={
    recipesCreate,
    recipesReadOne,
    recipesUpdateOne,
    recipesDeleteOne
};