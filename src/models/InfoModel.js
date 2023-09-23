const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    visitorCount: {
        type: Number,
        default: 0,
    }
}, { timestamps: true, versionKey: false })

const InfoModel = model('visitors', DataSchema);

module.exports = InfoModel;