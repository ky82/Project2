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
      track_image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      track_published: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      track_summary: {
        type: DataTypes.TEXT,
        allowNull: true
      },
  });
  return Song;
};