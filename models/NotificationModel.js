const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const Notification = sequelize.define("notifications",{
    "id":{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    "title":{
        type:DataTypes.STRING,
        allowNull:false
    },

    "content":{
        type:DataTypes.TEXT,
        allowNull:false
    },

    "date":{
        type:DataTypes.DATEONLY,
        allowNull:false
    },

    "time":{
        type:DataTypes.TIME,
        allowNull:false
    }
})

module.exports = Notification