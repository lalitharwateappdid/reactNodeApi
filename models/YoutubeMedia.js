const { DataTypes, STRING } = require("sequelize");

const sequelize = require("../database/database");

const YoutubeMedia = sequelize.define("YoutubeMedia", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }
});

module.exports = YoutubeMedia