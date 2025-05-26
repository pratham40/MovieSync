const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/bookstore` || "mongodb://localhost:127.0.0.1:27017/bookstore");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}


module.exports = connectDB;
