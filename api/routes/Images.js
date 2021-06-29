const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const upload = multer();

AWS.config.update({region: 'us-west-2'});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const router = express.Router();

// TODO: create AWS object

// Post image to S3 bucket
router.post('/', upload.single(), (request, response) => {
    
    console.log(request.body);
    // Post image to S3

    // get information returned from S3 call

    // Post information to database

    // Return success or failure
    response.sendStatus(200);
});

module.exports = router