'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Otvet }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.hasMany(Otvet, { foreignKey: 'voprosId' });
    }
  }
  Quiz.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Quiz',
    }
  );
  return Quiz;
};
