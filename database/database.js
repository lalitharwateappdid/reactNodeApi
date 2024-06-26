require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sadhanaananad",
    "raiyan", "raiyan123@", {
    host: process.env.host,
    dialect: "mysql",
    port: process.env.db_port,
});


module.exports = sequelize 