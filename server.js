const cors = require("cors");
const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes= require("./routes/auth")
const protectedRoutes = require("./routes/protected")
const productRoutes = require("./routes/Products")
const PORT=5000

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*", // your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // allow specific methods if needed
    credentials: true               // if you're sending cookies/auth
  }));
connectDB();


app.use("/api",authRoutes);
app.use("/api/protected",protectedRoutes);
app.use("/api/products",productRoutes);

app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
});