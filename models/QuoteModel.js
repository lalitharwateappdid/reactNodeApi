const { DataTypes } = require("sequelize");

const sequelize = require("../database/database");

const Quote = sequelize.define("Quotes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quote: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    day_of_year:{
        type:DataTypes.INTEGER,
    },

    year:{
        type:DataTypes.INTEGER
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
});

module.exports = Quote