## AWS lambda severless with experss


# Project Setting
## aws credentials

```shell
serverless config credentials \
  --provider aws \
  --key Your AWS Access Token \
  --secret Your AWS Secret Access Key
```
or
```shell
aws configure
AWS Access Key ID [None]: Access Key
AWS Secret Access Key [None]: Secret Access Key
Default region name [None]: ap-northeast-2
Default output format [None]: ENTER
```

---
## Node.js setting

* Node.js v16.x
1. npm install
2. npm install -g serverless

---
## Deploy

1. dev 환경 배포
> npm run deploy:dev

2. prod 환경 배포
> npm run deploy:prod

3. 로컬 환경 실행
> npm start

---
## Serverless offline
> serverless offline start
```shell
Starting Offline at stage dev (ap-northeast-2)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * app: express-lambda-test-dev-app

   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   ANY | http://localhost:3000/dev                                     │
   │   POST | http://localhost:3000/2015-03-31/functions/app/invocations   │
   │   ANY | http://localhost:3000/dev/api/v1/{proxy*}                     │
   │   POST | http://localhost:3000/2015-03-31/functions/app/invocations   │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀
```

### model sample
```js
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
```