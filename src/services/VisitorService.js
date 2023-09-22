const VisitorModel = require("../models/VisitorModel");


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
        return { status: 'failed', error: 'Something went wrong' }
    }
};