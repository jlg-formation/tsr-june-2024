import express, { RequestHandler } from 'express';
import serveIndex from 'serve-index';
import api from './api';

const app = express();
const port = 3000;

const log: RequestHandler = (req, res, next) => {
  console.log('req: ', req.method, req.url);
  next();
};

app.use(log);

app.use('/api', api);

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
