const express = require('express');
const allowd_origins = require('../config/allowed_origin');
const cors = require('cors');

const app = express();

const corsOPtions = {
  origin: allowd_origins(),
  method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
  credentials: true,
}
app.use(cors(corsOPtions));

app.get('/api/v1/meta', async (req, res) => {

  if (process.env.NODE_ENV === 'production') {
    console.log("람다로 돌아가는 노드 환경은 현재 prod 환경입니다.");
  }
  if (process.env.NODE_ENV === 'development') {
    console.log("람다로 돌아가는 노드 환경은 현재 dev 환경입니다.");
  }

  return res.json({
    "message": 'hello world',
  });
});

module.exports = app;