//Database connection
Sequelize = require('sequelize');

db = new Sequelize('empl','root','centizen152@',{
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    logging : false
});

module.exports = db;