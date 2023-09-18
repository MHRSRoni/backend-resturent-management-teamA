const { CreateFood, UpdateFood, DeleteFood, AllFoods, ReadFood } = require("../services/FoodService")

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