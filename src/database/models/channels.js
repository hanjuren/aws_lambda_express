const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    static associate(models) {
      // Channel.hasMany(models.RawRecord);
      Channel.hasMany(models.ChannelUser);
      Channel.hasMany(models.User);
      // Channel.hasMany(models.ShopifyOrder);
      // Channel.hasMany(models.ShopifyRefund);
    }
  }
  Channel.init({
    b2c: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cat1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cat2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cat3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    biz: {
      type: DataTypes.STRING,
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_provider: {
      type: DataTypes.STRING,
      allowNull: true
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delivery: {
      type: DataTypes.STRING,
      allowNull: true
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true
    },
    default_vat_custom: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    default_adjust: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    raw_data_period: {
      type: DataTypes.STRING,
      allowNull: true
    },
    default_shipping_cost_per_package: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cafe24_mall_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cafe24_shop_no: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shopify_store_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    tokens_json: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {}
    },
    order_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    product_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    app_key: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Channel',
    tableName: 'channels',
    indexes: [
      {
        name: "channels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "index_channels_on_app_key",
        fields: [
          { name: "app_key" },
        ]
      },
      {
        name: "index_channels_on_cafe24_mall_id",
        fields: [
          { name: "cafe24_mall_id" },
        ]
      },
      {
        name: "index_channels_on_is_active",
        fields: [
          { name: "is_active" },
        ]
      },
      {
        name: "index_channels_on_shopify_store_id",
        fields: [
          { name: "shopify_store_id" },
        ]
      },
    ]
  });

  return Channel;
};