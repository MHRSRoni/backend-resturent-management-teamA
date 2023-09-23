
const { CreateFood, UpdateFood, DeleteFood, AllFoods, ReadFood, SearchByCategory, SearchByTitle } = require("../services/FoodService")

exports.CreateFood = async (req, res) => {
    const result = await CreateFood(req);

    res.status(200).json(result);
};

exports.ReadFood = async (req, res) => {
    const result = await ReadFood(req);

    res.status(200).json(result);
};

exports.UpdateFood = async (req, res) => {
    const result = await UpdateFood(req);

    res.status(200).json(result);
};

exports.DeleteFood = async (req, res) => {
    const result = await DeleteFood(req);

    res.status(200).json(result);
};

exports.AllFoods = async (req, res) => {
    const result = await AllFoods(req);

    res.status(200).json(result);

};


//!SEARCH

exports.SearchByCategory = async (req, res) => {
    const result = await SearchByCategory(req);

    res.status(200).json(result);
};

exports.SearchByTitle = async (req, res) => {
    const result = await SearchByTitle(req);

    res.status(200).json(result);
};