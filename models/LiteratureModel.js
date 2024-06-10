const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const Literature = sequelize.define("literatures",{
    "id":{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    "category_id":{
        type:DataTypes.INTEGER,
    },
    "sub_category_id":{
        type:DataTypes.INTEGER,
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
    "author_name":{
        type:DataTypes.STRING
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
    }
})

const category = require("./CategoryModel");
const SubCategory = require("./SubCategoryModel");
Literature.belongsTo(category,{foreignKey:"category_id", allowNull:true})
Literature.belongsTo(SubCategory,{foreignKey:"sub_category_id", allowNull:true})