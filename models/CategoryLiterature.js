const {DataTypes} = require("sequelize")

const sequelize = require("../database/database");
const Category = require("./CategoryModel");
const Literature = require("./LiteratureModel");

const CategoryLiterature = sequelize.define("CategoryLiterature",{
   
})

Category.belongsToMany(Literature,{through:CategoryLiterature})
Literature.belongsTo(Category,{through:CategoryLiterature})


module.exports = CategoryLiterature