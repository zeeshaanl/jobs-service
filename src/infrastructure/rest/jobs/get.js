import SearchObject from '../../../domain/searchObject/SearchObject';
import appContainerInstance from '../../../AppContainer';
import authenticate from '../basicAuth/authenticate';
import express from 'express';

const router = express.Router();

const { loggerInstance } = appContainerInstance;
const { logger } = loggerInstance;

router.get('/jobs', async (req, res) => {
    const { jobTitle, location } = req.query;
    if (!jobTitle && !location) {
        logger.info("Missing params: jobTitle and location");
        res.status(422).send("Missing params: jobTitle and location");
    }
    else if (!jobTitle) {
        logger.info("Missing params: jobTitle");
        res.status(422).send("Missing param: jobTitle");
    }
    else if (!location) {
        logger.info("Missing params: location");
        res.status(422).send("Missing param: location");
    }
    else {
        try {
            const searchObject = new SearchObject({
                jobTitle,
                location
            });
            const jobs = await appContainerInstance.findJobsUseCase.invoke(searchObject);
            if (!jobs || !jobs.length) {
                logger.warn(`No Jobs found for jobTitle:${jobTitle} and location:${location}`);
                res.status(404).send("No jobs found.");
            } else {
                res.json(jobs);
            }
        } catch (error) {
            logger.error(`${error.status || 500} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            res.status(500).send("There was an error finding jobs.");
        }
    }
});

router.get('/enterJobs', authenticate, (req, res) => {
    res.render('index');
});

export default router;
