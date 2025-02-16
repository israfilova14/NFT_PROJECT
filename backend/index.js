// PACKAGES
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

// UTILITIES
const connectDB = require('./config/db.js');
const app = express();
const nftRoutes = require('./routes/nftRoutes.js')

// CORS CONFIGURATION
const corsOptions = {
  origin: process.env.FRONTENT_URL || "http://localhost:5173",
  credentials: true
};

app.use(cors(corsOptions));

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// ROUTES
app.use('/nft', nftRoutes)

// SERVER SETUP
const PORT = process.env.PORT || 9000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
  })
})