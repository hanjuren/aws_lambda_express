const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AnswerStes extends Model {
    static associate(models) {
      // AnswerStes.belongsTo(models.Project);
      AnswerStes.belongsTo(models.User);
      // AnswerStes.belongsTo(models.Subject);
    }
  }
  AnswerStes.init({
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    answers_json: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "[]"
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'AnswerStes',
    tableName: 'answer_sets',
    indexes: [
      {
        name: "answer_sets_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ],
  });

  return AnswerStes;
};
