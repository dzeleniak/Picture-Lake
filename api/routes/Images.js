const express = require('express');

const {
    postImage,
    getImages,
    getImage,
    putImage,
    deleteImage,
} = require('../Controllers/ImageController');

const router = express.Router();

// Create DB entry for image
router.post('/', postImage);

// Get all image DB entries
router.get('/', getImages);  

router.get('/:id', getImage);

router.put('/:id', putImage);

router.delete('/:id', deleteImage);

module.exports = router