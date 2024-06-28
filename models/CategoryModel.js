const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Category = sequelize.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  masterCategory: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  cover_image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
 

});

// Define many-to-many relationship with itself (Category)
Category.belongsToMany(Category, {
  through: 'CategoryRelationship',
  as: 'relatedCategories',
  foreignKey: 'categoryId',
  otherKey: 'relatedCategoryId'
});

// Ensure bidirectional association
Category.belongsToMany(Category, {
  through: 'CategoryRelationship',
  as: 'relatedToCategories',
  foreignKey: 'relatedCategoryId',
  otherKey: 'categoryId'
});

module.exports = Category;
