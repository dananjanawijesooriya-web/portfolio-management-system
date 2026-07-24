const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB =  require("./config/db");

const app = express();

//Connect MongoDB
connectDB();

//middleware
app.use(cors());
app.use(express.json());

//Test route
app.get("/", (req, res) => {
    res.send("Portfolio Management API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});