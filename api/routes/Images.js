const express = require('express');
const AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-2'});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

s3.listBuckets((err,data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data.Buckets);
    }
});

const router = express.Router();

// TODO: create AWS object

// Post image to S3 bucket
router.post('/', (request, response) => {
    
    // Post image to S3

    // get information returned from S3 call

    // Post information to database

    // Return success or failure
});

module.exports = router