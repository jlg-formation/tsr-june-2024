const express = require('express');

const app = express.Router();

app.get('/random', (req, res) => {
  res.json({ samples: 34, multiplicationFactor: 12 });
});

module.exports = app;
