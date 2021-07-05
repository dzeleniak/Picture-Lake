// Packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./Database/db');
const Images = require('./routes/Images');

// Initialize api
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', Images);

const port = process.env.PORT

app.get('/', (req,res) => {
    res.send({msg: "hello!"})
})

// Start server
app.listen(port, async ()=>{
    console.log(`Listening on port: ${port}`);
})