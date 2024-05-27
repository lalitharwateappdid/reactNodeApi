const {DataTypes} = require("sequelize")

const sequelize = require("../database/database");

const Book = sequelize.define("books",{
    "id":{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    "name":{
        type:DataTypes.STRING,
        allowNull:true
    },
    "description":{
        type:DataTypes.TEXT,
        allowNull:true
    },
    "pages_in_books":{
        type:DataTypes.STRING,
        allowNull:true
    },
    "price":{
        type:DataTypes.STRING,
        allowNull:true
    }
});

module.exports = Book;