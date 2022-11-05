require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const connectToDatabase = require("./config/db");
const sample = require("./config/routes/sample");
const count = require("./config/routes/count");
const cors = require("cors");

app.use(express.json());

// Middleware
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Router
app.use("/api/sample", sample);
app.use("/api/count", count);

//here we are configuring dist to serve app files
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

connectToDatabase();

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}.`)
);
