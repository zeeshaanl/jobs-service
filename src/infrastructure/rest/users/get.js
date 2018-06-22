import router from '../routes';
import express from 'express';
import appContainerInstance from '../../../AppContainer';
import SearchObject from '../../../domain/searchObject/SearchObject';

router = express.Router();

const { loggerInstance } = appContainerInstance;
const { logger } = loggerInstance;

router.get('/getUser', async (req, res) => {
    if (!req.query.userId) {
        logger.info("Missing params: userId");
        res.status(422).send("Missing params: userId");
    } else {
        const { userId } = req.query;

    }
});
