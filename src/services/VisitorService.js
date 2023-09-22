const VisitorModel = require("../models/VisitorModel");

//!Visitir Counter
exports.VisitorCount = async () => {
    try {
        const data = await VisitorModel.findOneAndUpdate(
            {},
            { $inc: { visitorCount: 1 } },
            { visitorCount: true });

        if (!data) {
            return { status: 'fail', error: 'Visitor not found' };
        }

        return { status: 'Success', data: data };

    } catch (error) {
        console.log(error);
        return { status: 'fail', error: 'Something went wrong' }
    }
};