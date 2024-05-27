const {DataTypes} = require("sequelize")

const sequelize = require("../database/database");

const HomeContent = sequelize.define("HomeContents",{
    "id":{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    "description":{
        type:DataTypes.TEXT,
        allowNull: true
    },
    "image_path":{
        type:DataTypes.STRING,
        allowNull:true
    }
})

module.exports = HomeContent