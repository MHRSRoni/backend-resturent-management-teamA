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

        const existingTitle = await FoodModel.findOne({ title })

        if (existingTitle) {
            return { status: 'fail', error: 'Title already exists' }
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

//!Read Food By Id
exports.ReadFood = async (req) => {
    try {
        const food = await FoodModel.findOne({ _id: req.params.id });

        if (!food) {
            return { status: 'fail', error: 'Food not found' };
        }

        return { status: 'success', data: food }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};

//!Update a Food By Id
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

        const food = await FoodModel.findOne({ _id: req.params.id });

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

//!Delete a Food By Id
exports.DeleteFood = async (req) => {
    try {
        const food = await FoodModel.findOne({ _id: req.params.id })

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
exports.AllFoods = async () => {
    try {
        const foods = await FoodModel.find();

        return { status: 'Success', data: foods }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' };
    }
};

//!Foods For Page
exports.FoodForPage = async (req) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 8;

        const skip = (page - 1) * pageSize;

        const data = await FoodModel.find().skip(skip).limit(pageSize);

        if (data?.length === 0) {
            return { status: 'fail', error: 'Food not found' };
        }

        return { status: 'Success', data: data }
    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' };
    }
};



//!Search By Category
exports.SearchByCategory = async (req) => {
    try {
        const { category } = req.body;

        const food = await FoodModel.find({ category });

        if (food.length === 0) {
            return { status: 'fail', error: 'Food not found' };
        }

        return { status: 'Success', data: food }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};

//!Search By Title
exports.SearchByTitle = async (req) => {
    try {
        const { title } = req.body;

        const food = await FoodModel.find({ title });

        if (food.length === 0) {
            return { status: 'fail', error: 'Food not found' };
        }

        return { status: 'Success', data: food }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};