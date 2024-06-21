const {DataTypes} = require("sequelize")

const sequelize = require("../database/database");


const BusinessSettings = sequelize.define("business_settings",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    key:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    value:{
        type:DataTypes.TEXT,
        allowNull:true
    }
})


module.exports = BusinessSettings