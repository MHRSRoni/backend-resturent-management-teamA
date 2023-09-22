const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    visitorCount: {
        type: Number,
        default: 0,
    }
}, { timestamps: true, versionKey: false })

const VisitorModel = model('visitors', DataSchema);

module.exports = VisitorModel;