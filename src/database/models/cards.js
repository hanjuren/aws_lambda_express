const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      // Card.hasMany(models.Payment);

      Card.belongsTo(models.User);
    }
  }
  Card.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_4_digits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    expiry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    customer_uid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    result_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transactions: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    }
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards',
    indexes: [
      {
        name: "cards_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "index_cards_on_status",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });

  return Card;
};