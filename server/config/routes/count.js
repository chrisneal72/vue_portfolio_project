const express = require("express");
const {
  getCount,
} = require("../controllers/count");

const route = express.Router();

route
  .route("/")
  .get(getCount)

module.exports = route;