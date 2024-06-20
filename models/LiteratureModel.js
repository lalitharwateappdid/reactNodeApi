const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");
const Category = require("./CategoryModel");

const Literature = sequelize.define("literatures",{
    "id":{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    "literature_english":{
        type:DataTypes.STRING
    },
    "literature_marathi":{
        type:DataTypes.STRING
    },
    "literature_description_english":{
        type:DataTypes.TEXT
    },
    "literature_description_marathi":{
        type:DataTypes.TEXT
    },
    "author_name_marathi":{
        type:DataTypes.STRING
    },
    "author_name_english":{
        type:DataTypes.TEXT
    },
    "author_name_marathi":{
        type:DataTypes.TEXT,
    },
    "saint_name_english":{
        type:DataTypes.STRING
    },
    "saint_name_marathi":{
        type:DataTypes.STRING,
    },
    "literature_content":{
        type:DataTypes.TEXT
    },
    "audio_file_path":{
        type:DataTypes.STRING
    },
    "status":{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    "category_id":{
        
    }

})

// const category = require("./CategoryModel");
const SubCategory = require("./SubCategoryModel");
Literature.hasMany(Category,{foreignKey:"category_id", allowNull:true})
Category.belongsTo(SubCategory,{foreignKey:"sub_category_id", allowNull:true})
module.exports = Literature