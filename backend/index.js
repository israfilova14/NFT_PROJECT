// PACKAGES
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// UTILITIES
const connectDB = require('./config/db.js');
const nftRoutes = require('./routes/nftRoutes.js');

dotenv.config();

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// CORS CONFIGURATION
const corsOptions = {
  origin: process.env.FRONTENT_URL || "http://localhost:5173/",
  credentials: true
};

app.use(cors(corsOptions));



// ROUTES
app.use('/nft', nftRoutes)

// SERVER SETUP
const PORT = process.env.PORT || 9000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
  })
})