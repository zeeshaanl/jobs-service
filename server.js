require('dotenv').config();
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import routes from './src/infrastructure/rest/routes'

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(4444, () => console.log('listening on port 4444'));