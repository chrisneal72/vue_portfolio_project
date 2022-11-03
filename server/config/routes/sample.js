const express = require("express");
const {
  getSample,
  createSample,
  updateSample,
  deleteSample
} = require("../controllers/sample");

const route = express.Router();

route
  .route("/")
  .get(getSample)
  .post(createSample);

route
  .route("/:id")
  .get(getSample)
  .put(updateSample)
  .delete(deleteSample);

module.exports = route;