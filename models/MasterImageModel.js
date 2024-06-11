const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");


const MasterImage = sequelize.define("master_image",{
    "id":{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    "image":{
        type:DataTypes.STRING,
        allowNull:false
    }

})

module.exports = MasterImage