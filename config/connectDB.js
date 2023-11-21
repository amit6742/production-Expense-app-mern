const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

// Connect to MongoDB database using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connect mongoDB ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDB;
