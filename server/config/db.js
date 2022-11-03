const mongoose = require("mongoose");
// const proxy = process.env.QUOTAGUARDSTATIC_URL;
const connectToDatabase = async () => {
  const connection = await mongoose.connect(
    // process.env.MONGODB_CLOUD_URI || "mongodb://localhost/lukeevents",
    process.env.MONGODB_CLOUD_URI,
    {
      // useCreateIndex: true,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    }
  );

  console.log(`MongoDB connected to ${connection.connection.host}.`);
};

module.exports = connectToDatabase;