const mongoose = require('mongoose');
const Chf = mongoose.model('chef');
const SpL = mongoose.model('shoppingList');
const Itm = mongoose.model('item');

const sortByCompletion = (req, res) => { };       //Need to create this controller unless pipe can be made in Angular
const sortByIngredientName = ( req, res) => { };  //Need to create this controller unless pipe can be made in Angular

const doAddShoppingList = (req, res, chef, shoppingList) => {
  if (!chef) {
  console.log("test 3", shoppingList)
    res
      .status(404)
      .json({"message": "Recipe(s) not found"});
  } else {
    console.log("test4", chef, shoppingList)
    const {listName, items} = req.body;
    chef.shoppingList.push({
      listName,
      items
    });
    chef.save((err, chef) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json({"message": "New shopping list created"});
      }
    });
  }
};

//Create

const shoppingListCreateList = (req, res) => {
      const chefId = req.params.chefid;
      if (chefId) {
        Chf
          .findById(chefId)
          .select('shoppingList')
          .exec((err, chef) => {
            if (err) {
              res
                .status(400)
                .json(err);
            } else {
              doAddShoppingList(req, res, chef);
            }
          });
    } else {
      res
        .status(404)
        .json({"message": "Chef not found"});
    }
};

const shoppingListCreateItem = (req, res) => {
  const shoppingListId = req.params.shoppingListid;
  if (shoppingListId) {
    SpL
      .findById(ingredients)
      .select('items')
      .exec((err, ingredients) => {
        if (err) {
          res
            .status(400)
            .json(err);
        } else {
          console.log("test 3", items)
          doAddShoppingList(req, res, ingredients);
        }
      });
    } else {
      res
        .status(404)
        .json({"message": "Shopping list not found"});
    }
};

 const shoppingListAddFullRecipe = (req, res) => { }; //Need to create this controller

//Read

const shoppingListReadList = (req, res) => {  
    SpL
      .findById(req.params.shoppingListid)
      .exec((err, shoppingList) => {
        if (!shoppingList) {
          return res
            .status(404)
            .json({
              "message": "Shopping list not found"
            });
        } else if (err) {
          return res
            .status(404)
            .json(err);
        } else {
          return res
            .status(200)
            .json(shoppingList);
        }
      });
 };

const shoppingListReadOne = (req, res) => { 
    Chf
      .findById(req.params.chefid)
      .select('ingredients')
      .exec((err, chef) => {
        if (!chef) {
          return res
            .status(404)
            .json({
              "message": "Chef not found"
            });
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }

        if (chef.ingredients && chef.ingredients.length > 0) {
          const shoppingList = chef.ingredients.id(req.params.recipeid);

          if (!recipe) {
            return res
              .status(404)
              .json({"message": "Recipe not found"});
          } else {
            const response = {
              chef: {
                ingredients: [ingredientSchema]
              },
              shoppingList
            };

            return res
              .status(200)
              .json(response);
          }
        } else {
          return res
            .status(404)
            .json({"message": "No ingredients found"});
        }
      });
};

//Update

const shoppingListUpdateList = (req, res) => { 
    if (!req.params.shoppingListid) {
        return res
            .status(404)
            .json({
                "message": "Not found, shoppingListid is required"
            });
    }
    SpL
        .findById(req.params.shoppingListid)
        .select('shoppingList')
        .exec((err, shoppingList) => {
        if (!shoppingList) {
            return res
            .status(404)
            .json({
                "message": "shoppingListid not found"
            });
        } else if (err) {
            return res
            .status(400)
            .json(err);
        }
        shoppingList.listName = req.body.listName;
        shoppingList.save((err, SpL) => {
            if (err) {
            res
                .status(404)
                .json(err);
            } else {
            res
                .status(200)
                .json(SpL);
            }
        });
        }
  );
 };

const shoppingListUpdateOne = (req, res) => {  
    if (!req.params.itemid) {
        return res
            .status(404)
            .json({
                "message": "Not found, itemid is required"
            });
    }
    Itm
        .findById(req.params.itemid)
        .select('item')
        .exec((err, item) => {
        if (!item) {
            return res
            .status(404)
            .json({
                "message": "itemid not found"
            });
        } else if (err) {
            return res
            .status(400)
            .json(err);
        }
        item.listItem = req.body.listItem;
        item.listQuantity = req.body.listQuantity;
        item.listUnitOfMeasure = req.body.listUnitOfMeasure;
        item.listItemComplete = req.body.listItemComplete;
        item.save((err, Itm) => {
            if (err) {
            res
                .status(404)
                .json(err);
            } else {
            res
                .status(200)
                .json(Itm);
            }
        });
        }
  );
};

//Delete
const shoppingListDeleteList = (req, res) => {  
    const {shoppingListid} = req.params;
    if (shoppingListid) {
        SpL
        .findByIdAndRemove(shoppingListid)
        .exec((err, shoppingList) => {
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

const shoppingListDeleteOne = (req, res) => { 
    const {itemid} = req.params;
    if (itemid) {
        Itm
        .findByIdAndRemove(itemid)
        .exec((err, item) => {
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

module.exports = {
    sortByCompletion,
    sortByIngredientName,
    shoppingListCreateList,
    shoppingListCreateItem,
    shoppingListAddFullRecipe,
    shoppingListReadList,
    shoppingListReadOne,
    shoppingListUpdateList,
    shoppingListUpdateOne,
    shoppingListDeleteList,
    shoppingListDeleteOne
};