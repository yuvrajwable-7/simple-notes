require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });

app.get("/", (req, res) => {
    res.send("Simple Notes API is running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});