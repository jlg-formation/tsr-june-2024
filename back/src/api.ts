import express from 'express';
import { Config } from './interfaces/Config';
import { random } from './misc';

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/random', (req, res) => {
  const config: Config = {
    samples: random(0, 500),
    multiplicationFactor: random(0, 100, 2),
  };
  res.setHeader('bllibl9', 'blabal');
  res.json(config);
});

export default app;
