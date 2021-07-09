const express = require('express');
const router = express.Router();

const {
    postImage,
    getImages,
    getImage,
    putImage,
    deleteImage,
} = require('../Controllers/ImageController');


// Create DB entry for image
router.post('/', postImage);

// Get all image DB entries
router.get('/', getImages);  

// Get image by id
router.get('/:id', getImage);

// Modify existing image
router.put('/:id', putImage);

// Delete existing image
router.delete('/:id', deleteImage);

module.exports = router;