const VisitorModel = require("../models/VisitorModel");


//!Visitor Counter
exports.VisitorCount = async () => {
    try {
        const data = await VisitorModel.findOneAndUpdate(
            {},
            { $inc: { visitorCount: 1 } },
            { new: true });

        if (!data) {
            return { status: 'fail', error: 'Visitor not found' };
        }

        return { status: 'Success', data: data };

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};