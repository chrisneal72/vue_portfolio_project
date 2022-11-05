const Sample = require("../models/sample");

// @desc    Get all samples
// @route   GET /api/sample
exports.getSample = async (req, res, next) => {
  const sample = await Sample.find();

  res.status(200).json({ success: true, data: sample });
};

// @desc    Get single sample
// @route   GET /api/sample/:id
exports.getSample = async (req, res, next) => {
  const sample = await Sample.find(
    { title: req.params.id }
  );

  res.status(200).json({ success: true, data: sample });
};

// @desc    Create Sample
// @route   POST /api/sample
exports.createSample = async (req, res, next) => {
  const sample = await Sample.create(req.body);

  res.status(201).json({ success: true, data: sample });
};

// @desc    Update sample
// @route   PUT /api/sample/:id
exports.updateSample = async (req, res, next) => {
  const sample = await Sample.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: sample });
};

// @desc    Delete sample
// @route   DELETE /api/sample/:id
exports.deleteSample = async (req, res, next) => {
  const sample = await Sample.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, data: {} });
};
