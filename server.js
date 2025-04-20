const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes= require("./routes/auth")
const protectedRoutes = require("./routes/protected")
const PORT=5000

const app = express();
app.use(express.json());
connectDB();


app.use("/api",authRoutes);
app.use("/api/protected",protectedRoutes);

app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
});