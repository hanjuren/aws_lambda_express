const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.BookingItem);
      Booking.belongsTo(models.User);
    }
  }
  Booking.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    booking_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
    indexes: [
      {
        name: "bookings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  return Booking;
};