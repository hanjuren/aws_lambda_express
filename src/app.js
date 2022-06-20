const express = require('express');
const router = require('./routes');
// const { initialize } = require('./init');

const app = express();

/**
 * Database, Cors Initialize
 */
// initialize(app);

/**
 * Express Default Setting
 */
app.use(express.json());

/**
 * Router
 */
app.use('/api/v1/lambda', router);

module.exports = app;