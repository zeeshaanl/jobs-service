import Job from '../../../domain/entity/Job';
import appContainerInstance from '../../../AppContainer';
import FavouriteJob from '../../../domain/entity/FavouriteJob';
import jwtAuthenticate from '../jwtAuth/jwtAuthenticate';

const express = require('express');
const router = express.Router();

router.post('/addJobToFavourites', jwtAuthenticate, async (req, res) => {
    const { userId, jobId } = req.body;
    const favouriteJob = new FavouriteJob({ userId, jobId });
    try {
        await appContainerInstance.addJobToFavouritesUseCase.invoke(favouriteJob);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(`Something went wrong, favourite job not added. Error: ${e}`);
    }
});

export default router;
