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
exports.AllFoods = async (req) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
      
        const allFood = await FoodModel.find().count();

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const allFoods = await FoodModel.find().skip(startIndex).limit(limit);

        const results = {};

        results.totalFood = allFood
        results.pageCount = Math.ceil(allFood / limit);

        if (endIndex < allFood) {
            results.next = {
                page: page + 1,
                limit: limit
            }
          
        const results = {};

        results.totalFood = allFood.length;
        results.pageCount = Math.ceil(allFood.length / limit);

        if (endIndex < allFood.length) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            }
        }
          
        results.resultFoods = allFoods

        return { status: 'Success', data: results }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' };
    }

};



//!Search By Category
exports.SearchByCategory = async (req) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;

        const { category } = req.body;

        const allFood = await FoodModel.find({ category }).count();

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
      
        const allFoods = await FoodModel.find({ category })
            .skip(startIndex)
            .limit(limit)

        const results = {};

        results.totalFood = allFood;
        results.pageCount = Math.ceil(allFood / limit);
          
        const results = {};

        results.totalFood = allFood;
        results.pageCount = Math.ceil(allFood / limit);

        if (endIndex < allFood) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            }
        }
      
        results.resultFoods = allFoods;

        return { status: 'Success', data: results }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' };
    }
};

//!Search By Title
exports.SearchByTitle = async (req) => {
    try {
        const { title } = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;

        const allFood = await FoodModel.find({ title }).count();


        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const allFoods = await FoodModel.find({ title }).skip(startIndex).limit(limit);

        const results = {}

        results.totalFood = allFood;
        results.pageCount = Math.ceil(allFood / limit);

        if (endIndex < allFood) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            }
        }
        results.resultFoods = allFoods;


        if (allFood.length === 0) {
            return { status: 'fail', error: 'Food not found' };
        }

        return { status: 'Success', data: results }

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};