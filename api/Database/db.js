const {Sequelize} = require('sequelize');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

const db = new Sequelize(connectionString, {
    dialect: 'postgres',
    protocol: 'postgres',
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false,
    //     }
    // }
});

db.authenticate()
    .then()
    .catch((err) => console.log(err));

module.exports = db;