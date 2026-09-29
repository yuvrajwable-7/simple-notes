require("dotenv").config();
const mongoose = require("mongoose");

console.log("Using legacy URI:", process.env.MONGO_URI.startsWith("mongodb://"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });