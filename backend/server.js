require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/Note");

const app = express();
app.use(express.json());

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

app.post("/notes", async (req, res) => {
    try {
        const note = await Note.create({
            title: req.body.title,
            content: req.body.content
        });

        res.json(note);
    } catch (error) {
        console.log("Create note error:", error);
        res.status(500).json({ message: "Failed to create note" });
    }
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});