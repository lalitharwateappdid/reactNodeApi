const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const Ebook = sequelize.define("ebooks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  authorName: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  coverPath:{
    type:DataTypes.STRING,
    allowNull:true
  },

  pdfPath:{
    type: DataTypes.STRING,
    allowNull:true
  },


});

module.exports = Ebook
