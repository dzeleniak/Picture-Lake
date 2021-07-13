const User = require('../Models/User');

exports.postUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const bodyUser = await User.create({
            username,
            email,
            password,
        });

        res.status(200).send({
            body: bodyUser.toJSON(),
        })

    } catch (err) {
        res.status(500).send({msg: err});
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send({
            body: users,
        });
    } catch (err) {
        res.status(500).send({msg: err});
    }
}

exports.getUserById = async (req, res) => {
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

exports.putUser = async (req, res) => {
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

exports.deleteUser = async (req, res) => {
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