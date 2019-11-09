// Import Sequelize library for `Sequelize.literal`.
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Song = sequelize.define('Song', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        movie_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    });
    return Song;
};