const express = require('express');

const router = express.Router();

// Create DB entry for image
router.post('/', (request, response) => {
    
    // Post image location and information 

    response.sendStatus(200);
});

module.exports = router