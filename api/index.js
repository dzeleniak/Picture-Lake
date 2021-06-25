const express = require('express');
require('dotenv').config();

let port = process.env.PORT

const app = express();

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})