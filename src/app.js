const express = require('express');
const { initialize } = require('./init');
const { User, Card } = require('./database/models');

const app = express();

initialize(app);

app.get('/api/v1/meta', async (req, res) => {
  try {
    const cards = await Card
      .findAll({
        include: {
          model: User,
        }
      });

    return res.json({
      "total": cards.length,
      "records": cards,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;