const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User.hasMany(models.);
      // User.hasMany(models.);
      // User.hasMany(models.);
      // User.hasMany(models.);
      // User.hasMany(models.);
      User.hasMany(models.AnswerStes);
      User.hasMany(models.App);
      User.hasMany(models.Booking);
      User.hasMany(models.Card);
      User.hasMany(models.ChannelUser);
      User.hasMany(models.Channel);
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    encrypted_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    reset_password_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reset_password_sent_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remember_created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sign_in_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    current_sign_in_ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_sign_in_ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_site_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    app_key: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    franchise_kind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    favorite_franchise_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    approved_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    favorite_product_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    consent_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    consent_accepted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    favorite_brand_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    favorite_review_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    social_kind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    social_access_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    social_refresh_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    social_issued_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    social_expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    social_token_object: {
      type: DataTypes.JSON,
      allowNull: true
    },
    my_referral_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    their_referral_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    blocked_user_ids: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: []
    },
    is_withdraw: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    marketing_sms_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    marketing_sms_accepted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    marketing_push_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    marketing_push_accepted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_mock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    app_build_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    order_count_total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    order_count_cancel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    order_count_no_show: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    social_id_token: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    indexes: [
      {
        name: "index_users_on_app_key_and_email",
        unique: true,
        fields: [
          { name: "app_key" },
          { name: "email" },
        ]
      },
      {
        name: "index_users_on_email",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "index_users_on_franchise_kind",
        fields: [
          { name: "franchise_kind" },
        ]
      },
      {
        name: "index_users_on_is_mock",
        fields: [
          { name: "is_mock" },
        ]
      },
      {
        name: "index_users_on_is_withdraw",
        fields: [
          { name: "is_withdraw" },
        ]
      },
      {
        name: "index_users_on_marketing_push_accepted",
        fields: [
          { name: "marketing_push_accepted" },
        ]
      },
      {
        name: "index_users_on_marketing_sms_accepted",
        fields: [
          { name: "marketing_sms_accepted" },
        ]
      },
      {
        name: "index_users_on_my_referral_code",
        unique: true,
        fields: [
          { name: "my_referral_code" },
        ]
      },
      {
        name: "index_users_on_reset_password_token",
        unique: true,
        fields: [
          { name: "reset_password_token" },
        ]
      },
      {
        name: "index_users_on_social_access_token",
        fields: [
          { name: "social_access_token" },
        ]
      },
      {
        name: "index_users_on_social_id_token",
        fields: [
          { name: "social_id_token" },
        ]
      },
      {
        name: "index_users_on_social_kind",
        fields: [
          { name: "social_kind" },
        ]
      },
      {
        name: "index_users_on_social_refresh_token",
        fields: [
          { name: "social_refresh_token" },
        ]
      },
      {
        name: "index_users_on_their_referral_code",
        fields: [
          { name: "their_referral_code" },
        ]
      },
      {
        name: "index_users_on_token",
        unique: true,
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  return User;
};