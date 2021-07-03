const express = require('express');

const router = express.Router();

// Create DB entry for image
router.post('/', async (req, res) => {

});

// Get all image DB entries
router.get('/', async (req, res) => {

})  

router.put('/:id', async(req,res) => {
    res.send();
})

router.delete('/:id', async (req,res) => {
    res.send();
})

module.exports = router