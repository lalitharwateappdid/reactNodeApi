const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const Category = sequelize.define("Categories",{
    'id':{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    "name":{
        type:DataTypes.STRING,
        allowNull: true
    },
    "description":{
        type:DataTypes.TEXT,
        allowNull:true
    }
})

module.exports = Category