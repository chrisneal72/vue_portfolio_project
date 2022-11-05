const Sample = require("../models/sample");

// @desc    Get count of samples
// @route   GET /api/count
exports.getCount = async (req, res, next) => {
  const count = await Sample.find().count();

  res.status(200).json({ success: true, data: count });
};
