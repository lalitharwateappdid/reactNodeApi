const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const User = sequelize.define("users",{
    "id":{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    "name":{
        type:DataTypes.STRING,
        allowNull:true
    },
    "email" :{
        type:DataTypes.STRING,
        allowNull:true
    },
    "password":{
        type:DataTypes.STRING,
        allowNull:true
    }
})

module.exports = User