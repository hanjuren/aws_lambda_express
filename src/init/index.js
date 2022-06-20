const cors = require('cors');
const { sequelize } = require('../database/models');
const { allowed_origin } = require('./allowed_origin');

const connectionDataBase = async () => {
  // sequelize connection
  sequelize.authenticate()
    .then(() => {
      console.log('connected database!!');
    })
    .catch((error) => {
      console.error(error);
    });
}

const corsInitialize = async (app) => {
  const options = {
    origin: allowed_origin(),
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    credentials: true,
  }
  app.use(cors(options));
}

const initialize = async (app) => {
  await corsInitialize(app);
  await connectionDataBase();
}

module.exports = { initialize }