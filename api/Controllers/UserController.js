const User = require('../Models/User');

exports.postUser = (req, res) => {
    const { username, email } = req.body;

    try {
        const bodyUser = await User.create({
            username,
            email,
        });

        res.status(200).send({
            body: bodyUser.toJSON(),
        })
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

exports.getUser = (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send({
            body: users,
        });
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

exports.getUserById = (req, res) => {
    const {id} = req.params;

    try {
        const user = await User.findByPk(id);
        res.status(200).send({
            body: user
        });
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

exports.putUser = (req, res) => {
    const {id} = req.params;
    const user = req.body;

    try{
        await User.update(user, {
            where: {id}
        })
            .then(item => {
                res.status(200).send({body: item});
            })
            .catch(err => {
                res.status(400).send({msg: err});
            })
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

exports.deleteUser = (req, res) => {
    const {id} = req.params;

    try {
        User.destroy({
            where: {id},
        })
            .then(item => {
                res.status(200).send({body: item});
            })
            .catch(err => {
                res.status(400).send({msg: err});
            })
    } catch (err) {
        res.status(500).send({msg: err});
    }
}