const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');
const commConfig = yaml.load(
  fs.readFileSync(path.join(__dirname, '../../../env.yml'), 'utf8')
);
const config = commConfig[process.env.NODE_ENV || "local"];


const local = {
  username: config.PG_USERNAME,
  password: config.PG_PASSWORD,
  database: config.PG_DATABASE,
  host: config.PG_HOST,
  dialect: config.PG_DIALECT,
  port: config.PG_PORT,
  timezone: config.PG_TIMEZONE,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at', // serquelize default createdAt, updatedAt
    updatedAt: 'updated_at',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
};

const development = {
  username: config.PG_USERNAME,
  password: config.PG_PASSWORD,
  database: config.PG_DATABASE,
  host: config.PG_HOST,
  dialect: config.PG_DIALECT,
  port: config.PG_PORT,
  timezone: config.PG_TIMEZONE,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at', // serquelize default createdAt, updatedAt
    updatedAt: 'updated_at',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
};

const production = {
  username: config.PG_USERNAME,
  password: config.PG_PASSWORD,
  database: config.PG_DATABASE,
  host: config.PG_HOST,
  dialect: config.PG_DIALECT,
  port: config.PG_PORT,
  timezone: config.PG_TIMEZONE,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at', // serquelize default createdAt, updatedAt
    updatedAt: 'updated_at',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
};

module.exports = { local, development, production };