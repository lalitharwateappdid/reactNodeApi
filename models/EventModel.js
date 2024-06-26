const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const Event = sequelize.define("events",{
    "id":{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    "event_name":{
        type:DataTypes.STRING,
        allowNull:true
    },
    "event_date":{
        type:DataTypes.DATEONLY,
        allowNull:true
    },
    "status":{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
   
})

module.exports = Event