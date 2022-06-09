const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successefully");
  } catch (error) {
    console.error(`DB connection ERROR => ${error}`);
  }
};

module.exports = connectDB;
