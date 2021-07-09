const {Sequelize, DataTypes} = require('sequelize');

const db = require('../Database/db');

const User = db.define('users', {
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

(()=>{
    await db.sync();
})();

module.exports = User;