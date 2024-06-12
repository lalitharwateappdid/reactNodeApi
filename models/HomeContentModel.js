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
       
    },
    "image_path":{
        type:DataTypes.STRING,
        
    },

    "status":{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})

module.exports = HomeContent