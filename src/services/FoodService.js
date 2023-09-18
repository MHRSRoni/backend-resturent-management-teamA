const slugify = require("slugify");
const FoodModel = require("../models/FoodModel");

//!Create a new Food
exports.CreateFood = async (req) => {
    try {
        const {
            title,
            category,
            description,
            image,
            calaory,
            price,
            discount_price
        } = req.body;

        if (!title) {
            return { status: 'fail', error: 'Title is required' };
        }
        if (!category) {
            return { status: 'fail', error: 'Category is required' };
        }
        if (!description) {
            return { status: 'fail', error: 'Title is required' };
        }
        if (!image) {
            return { status: 'fail', error: 'Image is required' };
        }
        if (!calaory) {
            return { status: 'fail', error: 'Calaory is required' };
        }
        if (!price) {
            return { status: 'fail', error: 'Price is required' };
        }

        const food = await FoodModel.create({
            title,
            slug: slugify(title),
            category,
            description,
            image,
            calaory,
            price,
            discount_price
        });

        return {
            status: 'Success',
            massage: 'New Food has been Created',
            data: food
        }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};

//!Read Food By Slug
exports.ReadFood = async (req) => {
    try {
        const food = await FoodModel.findOne({ slug: req.params.slug });

        if (!food) {
            return { status: 'fail', error: 'Food not found' };
        }

        return { status: 'success', data: food }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};

//!Update a Food By Slug
exports.UpdateFood = async (req) => {
    try {
        const {
            title,
            category,
            description,
            image,
            calaory,
            price,
            discount_price
        } = req.body;

        const food = await FoodModel.findOne({ slug: req.params.slug });

        if (!food) {
            return { status: 'fail', error: 'Food not found' }
        }

        const existingTitle = await FoodModel.findOne({ title });

        if (existingTitle) {
            return { status: 'fail', error: 'Food title already exists' }
        }

        const updateFood = await FoodModel.findOneAndUpdate({
            title: title || food.title,
            slug: slugify(title) || food.slug,
            category: category || food.category,
            description: description || food.description,
            image: image || food.image,
            calaory: calaory || food.calaory,
            price: price || food.price,
            discount_price: discount_price || food.discount_price
        });

        return {
            status: 'Success',
            massage: 'Food has been Updated!',
            data: updateFood
        }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }

};

//!Delete a Food By Slug
exports.DeleteFood = async (req) => {
    try {
        const food = await FoodModel.findOne({ slug: req.params.slug })

        if (!food) {
            return { status: 'fail', error: 'Food not found' }
        }

        const deleteFood = await FoodModel.findOneAndDelete(food);

        return {
            status: 'Success',
            massage: 'Food has been Deleted!',
            data: deleteFood
        }
    } catch (error) {
        console.log(error);
        return {
            status: 'fail', error: 'Something went wrong'
        }
    }
};

//!All Foods
exports.AllFoods = async (req) => {
    try {
        const foods = await FoodModel.find();

        return { status: 'Success', data: foods }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' };
    }
};