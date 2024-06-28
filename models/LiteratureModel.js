const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Category = require("./CategoryModel");

const Literature = sequelize.define("literatures", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    literature_english: {
        type: DataTypes.STRING
    },
    literature_marathi: {
        type: DataTypes.STRING
    },
    literature_description_english: {
        type: DataTypes.TEXT
    },
    literature_description_marathi: {
        type: DataTypes.TEXT
    },
    author_name_english: {
        type: DataTypes.TEXT,
    },
    author_name_marathi: {
        type: DataTypes.STRING
    },
    saint_name_english: {
        type: DataTypes.STRING
    },
    saint_name_marathi: {
        type: DataTypes.STRING,
    },
    literature_content: {
        type: DataTypes.TEXT
    },
    audio_file_path: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    categoryId: { // Foreign key to Category model
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    }
});

// Define associations
Literature.belongsTo(Category, {as: 'category', foreignKey: 'categoryId' }); // Literature belongs to a single Category

module.exports = Literature;
