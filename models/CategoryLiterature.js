const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");
const Category = require("./CategoryModel");
const Literature = require("./LiteratureModel");

const CategoryLiterature = sequelize.define("CategoryLiterature", {});

Category.belongsToMany(Literature, {
  through: CategoryLiterature,
  foreignKey: "categoryId", 
  otherKey: "literatureId",
});

Literature.belongsToMany(Category, {
  through: CategoryLiterature,
  foreignKey: "literatureId", 
  otherKey: "categoryId", 
});

module.exports = CategoryLiterature;
