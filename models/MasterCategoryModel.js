const { DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../database/database");

const MasterCategory = sequelize.define("master_categories",{
    "id":{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
   "description":{
    type:DataTypes.TEXT,
    allowNull:true
   },
   "subCategory":{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:""
        }

   }
})

exports.module = MasterCategory