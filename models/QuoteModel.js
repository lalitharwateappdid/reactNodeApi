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
    }
});

module.exports = Quote