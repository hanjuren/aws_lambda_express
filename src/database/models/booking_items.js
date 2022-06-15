const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookingItem extends Model {
    static associate(models) {
      BookingItem.hasMany(models.Booking);
    }
  }
  BookingItem.init({
    booking_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    people_count: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    files: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'BookingItem',
    tableName: 'booking_items',
    indexes: [
      {
        name: "booking_items_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  return BookingItem;
};