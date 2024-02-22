'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Otvet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Otvet }) {
      this.belongsTo(Otvet, { foreignKey: 'voprosId' });
    }
  }
  Otvet.init(
    {
      voprosId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Quizzes',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isRight: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Otvet',
    }
  );
  return Otvet;
};
