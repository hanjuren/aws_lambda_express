const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChannelUser extends Model {
    static associate(models) {
      ChannelUser.belongsTo(models.User);
      ChannelUser.belongsTo(models.Channel);
    }
  }
  ChannelUser.init({
    channel_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'ChannelUser',
    tableName: 'channel_users',
    indexes: [
      {
        name: "channel_users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  return ChannelUser;
};