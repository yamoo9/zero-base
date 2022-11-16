import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routerEntry from './routers/index.js';
import routerEdiya from './routers/ediya.js';
import routerTiltCard from './routers/tiltCard.js';
import routerSK from './routers/sk.js';

dotenv.config();

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.static('static'));
app.use(morgan('tiny'));
app.set('view engine', 'pug');
app.set('views', './views');

const { API_VERSION } = process.env;

app.use(API_VERSION, routerEntry);
app.use(`${API_VERSION}/ediya`, routerEdiya);
app.use(`${API_VERSION}/tiltcard`, routerTiltCard);
app.use(`${API_VERSION}/sk`, routerSK);

const HOSTNAME = 'localhost';
const PORT = 5000;

app.listen(PORT, () => {
  const ENDPOINT = `${HOSTNAME}:${PORT}${API_VERSION}`;
  console.group('API 서버 구동');
  console.log(`Home → http://${ENDPOINT}`);
  console.log(`Ediya → http://${ENDPOINT}/ediya`);
  console.log(`TiltCard → http://${ENDPOINT}/tiltcard`);
  console.log(`SK → http://${ENDPOINT}/sk`);
  console.groupEnd('API 서버 구동');
});
