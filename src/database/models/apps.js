const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class App extends Model {
    static associate(models) {
      // App.hasMany(models.Setting);

      App.belongsTo(models.User);
    }
  }
  App.init({
    app_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'App',
    tableName: 'apps',
    indexes: [
      {
        name: "apps_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "index_apps_on_app_key",
        unique: true,
        fields: [
          { name: "app_key" },
        ]
      },
    ]
  });

  return App;
};