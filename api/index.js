// Packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Routes
const Images = require('./routes/Images');

// Initialize App
const port = process.env.PORT
const app = express();

// Middleware
app.use(cors());
app.use('/images', Images);

// Start server
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})