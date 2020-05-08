const mongoose = require('mongoose');
const Rec = mongoose.model('recipe');

const recipesList = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
 };

const recipesCreate = (req, res) => { };

const recipesReadOne = (req, res) => { };

const recipesUpdateOne = (req, res) => { };

const recipesDeleteOne = (req, res) => { };

module.exports ={
    recipesList,
    recipesCreate,
    recipesReadOne,
    recipesUpdateOne,
    recipesDeleteOne
};