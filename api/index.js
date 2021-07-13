// Packages
const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const db = require('./Database/db');

// Initialize api
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

// Routes
const Images = require('./Routes/Images');
const Users = require('./Routes/Users');
const Auth = require('./Routes/Auth');
app.use('/images', Images);
app.use('/users', Users);
app.use('/auth', Auth);

// Start server
const port = process.env.PORT;
app.listen(port, async ()=>{
    console.log(`Listening on port: ${port}`);
})