const InfoModel = require("../models/InfoModel");

//!Visitir Counter
exports.VisitorCount = async () => {
    try {
        const data = await InfoModel.findOneAndUpdate(
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