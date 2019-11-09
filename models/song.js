
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var song = sequelize.define('song', {
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
        artist: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        track: {
        type: DataTypes.STRING(100),
        allowNull: false
        },
        heard: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    });
    return song;
        movie_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    });
    return Song;
};