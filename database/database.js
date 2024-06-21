require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.dbname,
    process.env.user, process.env.pasword, {
    host: process.env.host,
    dialect: "mysql",
    port: process.env.db_port,
});


module.exports = sequelize 