import express from 'express';
import { Config } from './interfaces/Config';
import { random } from './misc';

const app = express.Router();

app.get('/random', (req, res) => {
  const config: Config = {
    samples: random(0, 200),
    multiplicationFactor: random(0, 100, 2),
  };
  res.json(config);
});

export default app;
