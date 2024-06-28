const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Category = sequelize.define("Categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  }
});



// Define self-referencing association (parent-child relationship)
// Category.hasMany(Category, { as: 'children', foreignKey: 'parentId' });
// Category.belongsTo(Category, { as: 'parent', foreignKey: 'parentId' });
Category.belongsToMany(Category, {
    through: 'CategoryRelationship', // This is the join table name
    as: 'relatedCategories', // Alias for the relation
    foreignKey: 'categoryId',
    otherKey: 'relatedCategoryId'
  });
  
  // Ensure the association is bidirectional
  Category.belongsToMany(Category, {
    through: 'CategoryRelationship',
    as: 'relatedToCategories',
    foreignKey: 'relatedCategoryId',
    otherKey: 'categoryId'
  });
  

// Category.addHook('afterFind', async (categories) => {
//     if (!Array.isArray(categories)) {
//       categories = [categories];
//     }
  
//     const fetchChildren = async (category) => {
//       const children = await category.getChildren();
//       if (children && children.length > 0) {
//         category.dataValues.children = children;
//         for (const child of children) {
//           await fetchChildren(child);
//         }
//       }
//     };
  
//     for (const category of categories) {
//       await fetchChildren(category);
//     }
//   });

module.exports = Category;
