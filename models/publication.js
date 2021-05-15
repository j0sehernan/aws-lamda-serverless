'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Author);
    }
  };
  Publication.init({
    AuthorId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    dateTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Publication',
  });

  //Publication.Author = Publication.belongsTo(db.Author)

  return Publication;
};