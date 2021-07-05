const {Sequelize} = require('sequelize');
require('dotenv').config();

// Get data for db initialization
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const connectionString = process.env.DATABASE_URL;

// Create sequelize instance
// const db = new Sequelize(dbName, dbUser, dbPassword, {
//     host: dbHost,
//     dialect: 'postgres',
// });

const db = new Sequelize(connectionString, {
    dialect: 'postgres',
});

module.exports = db;