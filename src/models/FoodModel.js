const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
    calaory: {
        type: String,
    },
    discount: {
        type: Boolean,
        default: false
    },
    discount_price: {
        type: String,
        default: '0'
    }

}, { timestamps: true, versionKey: false });


const FoodModel = model('foods', DataSchema);

module.exports = FoodModel;