const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Sample must have a title."],
      trim: true
    },
    bodyCopy: { type: String },
    addInfo: [
      {
        title: { type: String },
        lines: [{ line: { type: String } }]
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = Sample;