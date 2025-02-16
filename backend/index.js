// PACKAGES
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const nftRoutes = require('./routes/nftRoutes.js');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// CORS CONFIGURATION
const corsOptions = {
  origin: process.env.FRONTENT_URL || "http://localhost:5173",
  credentials: true
};


app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/nft', nftRoutes)

// SERVER SETUP
const PORT = process.env.PORT || 9000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
  })
})