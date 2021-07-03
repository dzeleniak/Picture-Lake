const Image = require('../Models/Image');

const postImage = async ( req, res ) => {
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
}

const getImages = async ( req, res ) => {
    try {
        // run select all query
        const images = await Image.findAll();
        res.status = 200;
        res.send({
            body: images,
        })
    } catch (err) {
        res.status = 400;
        res.send({
            msg: err,
        })
    }
}

const getImage = async ( req, res ) => {
    const { id } = req.params;
    try {
        const image = await Image.findByPk(id);
        res.status = 200;
        res.send({
            body: image
        })
    } catch (err) {
        res.status = 400;
        res.send({
            msg: err,
        })
    }
}

const putImage = async ( req, res ) => { 

}

module.exports = {
    postImage,
    getImages,
    getImage,
}
