const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        lowercase: true
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
    images: [{
        type: String,
    }],
    price: {
        type: String,
        required: true
    },
    calaory: {
        type: String,
        required: true
    },
    discount_price: {
        type: String,
        default: '0'
    }

}, { timestamps: true, versionKey: false });

const FoodModel = model('foods', DataSchema);

module.exports = FoodModel;
