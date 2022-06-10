const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const allowd_origins = require('../config/allowed_origin');
const cors = require('cors');

const app = express();

let file_path;
if (process.env.NODE_ENV === 'production') {
  file_path = path.join(__dirname, '../.env.prod');
} else if (process.env.NODE_ENV === 'development') {
  file_path = path.join(__dirname, '../.env.dev');
} else {
  file_path = path.join(__dirname, '../.env.local');
}
dotenv.config({ path: file_path });

const corsOPtions = {
  origin: allowd_origins(),
  method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
  credentials: true,
}
app.use(cors(corsOPtions));

app.get('/api/v1/meta', async (req, res) => {
  return res.json({
    "message": 'hello world',
  });
});

module.exports = app;