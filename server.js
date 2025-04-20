const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes= require("./routes/auth")
const PORT=5000

const app = express();
app.use(express.json());
connectDB();


app.use("/api",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
});