const User = require('../Models/User');
 
exports.signIn = async (req,res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({
            where: {
                username,
                password,
            }
        })
        
        if(user) {
            req.session.loggedin = true;
            req.session.username = username;
            res.status(200).send({msg: 'Logged in.'});
        } else {
            res.status(500).send({msg: 'Incorrect username or password.'});
        }
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.signOut = async (req,res) => {
    if(req.session.loggedin){
        req.session.loggedin = false;
        res.status(200).send({msg: 'User signed out.'});
    } else {
        res.status(500).send({msg: 'No user logged in.'});
    }
}