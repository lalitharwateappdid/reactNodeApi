require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.dbname,
    process.env.user, null, {
    host: "localhost",
    dialect: "mysql"
});


module.exports = sequelize 