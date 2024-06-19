
const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const SubCategory = sequelize.define("sub_categories",{
    "id":{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    "name":{
        type:DataTypes.STRING,
        allowNull:true
    }
    ,
    "description":{
        type:DataTypes.TEXT,
        allowNull:true
    },
    "categoryId":{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    "status":{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})

// defining relationships
// const Category = require("./CategoryModel");

// SubCategory.belongsTo(Category,{foreignKey:"categoryId"})

module.exports = SubCategory