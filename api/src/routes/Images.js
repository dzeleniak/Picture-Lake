const express = require('express');

const router = express.Router();

const Image = require('../Models/Image');

// Create DB entry for image
router.post('/', async (req, res) => {

    const { url, name, description, username } = req.body;
    try {
        // Post image record to database
        const bodyImage = await Image.create({
            url,
            name,
            description: description ? description : null,
            username: username ? username : null,
        });

        res.send({
            status: "Success",
            body: bodyImage.toJSON(),
        })
    } catch (err) {
        res.send({
            status: "Failure",
            error: err
        });
    }
});

// Get all image DB entries
router.get('/', async (req, res) => {

    console.log("Get hit");
    try {
        // run select all query
        const images = await Image.findAll();
        console.log(JSON.stringify(images, null, 4));
        res.send({
            body: images
        })
    } catch (err) {
        console.log(err);
    }
})  

module.exports = router