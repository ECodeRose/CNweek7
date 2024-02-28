const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection is successful");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};

module.exports = connection;
