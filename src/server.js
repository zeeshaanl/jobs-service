import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './infrastructure/rest/routes'
import appContainerInstance from './AppContainer';

const app = express();

app.use(cors());
app.use(morgan('combined', { stream: appContainerInstance.loggerInstance.stream }));
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/infrastructure/web/views');

app.use("/public", express.static(__dirname + '/infrastructure/web/public'));

// app.use(express.static(__dirname + '/src/infrastructure/web/public'));
app.use(routes);

const port = 4444;

app.listen(port, () => console.log(`Server listening on port ${port}`));
