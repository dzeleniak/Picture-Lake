// Packages
const express = require('express');
require('dotenv').config();

// Routes
const Images = require('./routes/Images');

const port = process.env.PORT
const app = express();


app.use('/images', Images);

// Start server listening on port
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})