const {Sequelize, DataTypes} = require('sequelize');

const db = require('../Database/db');

// Model for Image table
const Image = db.define('images', {
    name:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
});

(async () => {
    await db.sync()
})();

module.exports = Image;