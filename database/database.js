require("dotenv").config();
const { Sequelize } = require("sequelize");

console.log('testing');
console.log(process.env.user);
const sequelize = new Sequelize(process.env.dbname,
    process.env.user, process.env.pasword, {
    host: process.env.host,
    dialect: "mysql",
    port: process.env.db_port,
    define: {
        timestamps: false
    }
});


module.exports = sequelize 