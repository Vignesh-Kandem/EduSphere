const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://kandemvignesh:Yd6fbt1f%40010612@cluster0.err19mg.mongodb.net/edusphere?retryWrites=true&w=majority";
//mongodb+srv://kandemvignesh:Yd6fbt1f%40010612@cluster0.err19mg.mongodb.net/
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
