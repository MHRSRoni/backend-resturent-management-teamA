const { VisitorCount } = require("../services/InfoService");

//!Visitor Counter
exports.VisitorCount = async (req, res) => {
    const result = await VisitorCount(req);

    res.status(200).json(result);
};