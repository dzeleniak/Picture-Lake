// Packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Routes
const Images = require('./routes/Images');

const port = process.env.PORT
const app = express();

app.use(cors());

app.use('/images', Images);

// Start server listening on port
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})