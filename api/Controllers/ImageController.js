const Image = require('../Models/Image');

//Post an image
exports.postImage = async ( req, res ) => {
    const { url, name, description, username } = req.body;
    try {
        // Post image record to database
        const bodyImage = await Image.create({
            url,
            name,
            description: description ? description : null,
            username: username ? username : null,
        });

        res.status(200).send({
            body: bodyImage.toJSON(),
        })
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

//Get all images
exports.getImages = async ( req, res ) => {
    try {
        // run select all query
        const images = await Image.findAll();
        res.status(200).send({
            body: images,
        });
    } catch (err) {
        res.status(500).send({msg: err})
    }
}

//Get a single image entry
exports.getImage = async ( req, res ) => {
    const { id } = req.params;
    try {
        const image = await Image.findByPk(id);
        res.status(200).send({
            body: image
        })
    } catch (err) {
        res.status(500).send({msg: err})
    }
}

//Update image entry
exports.putImage = async ( req, res ) => { 
    const { id } = req.params;
    const item = req.body

    try {
        await Image.update(item, {
            where: {id}
        })
            .then(item => {
                res.status(200).send({msg: `Successfully updated item: ${id}`})
            })
            .catch(err => {
                res.status(400).send({msg: `Could not update item: ${err}`});
            })
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

//Delete image entry
exports.deleteImage = async ( req, res ) => {
    const { id } = req.params;
    try {
        await Image.destroy({
            where: {id}
        })
        .then(item => {
            res.send({msg: `Successfully deleted item: ${item}`})
        })
        .catch(err => {
            res.send({msg: `Could not delete item: ${err}`})
        })
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

