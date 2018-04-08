require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import logger from './src/lib/logger';

import routes from './src/infrastructure/rest/routes'

const app = express();

app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/infrastructure/web/views');

app.use("/public", express.static(__dirname + '/src/infrastructure/web/public'));

// app.use(express.static(__dirname + '/src/infrastructure/web/public'));
app.use(routes);

const port = 4444;

app.listen(port, () => console.log(`Listening on port ${port}`));
