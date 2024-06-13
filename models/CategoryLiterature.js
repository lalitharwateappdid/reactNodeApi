const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");
const { literatureGet } = require("../controllers/LiteratureController");

exports.CategoryLiterature = sequelize.define("category_literature",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    categoryId:{
        type:DataTypes.INTEGER
    },
    literatureId:{
        type:DataTypes.INTEGER
    }
});

CategoryLiterature.associate = models => {
    CategoryLiterature.belongsTo(models.Category, {
      foreignKey: 'actorId'
    });
    CategoryLiterature.belongsTo(models.literature, {
      foreignKey: 'movieId'
    });
  }