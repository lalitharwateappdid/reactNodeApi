require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.dbname,
    process.env.user, process.env.pasword, {
    // host: "localhost",
    dialect: "mysql"
});


module.exports = sequelize 