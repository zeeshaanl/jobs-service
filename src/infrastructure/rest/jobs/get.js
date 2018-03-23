import SearchObject from '../../../domain/searchObject/SearchObject';
import appContainerInstance from '../../../AppContainer';
import authenticate from '../basicAuth/authenticate';

const express = require('express');
const router = express.Router();

router.get('/jobs', async (req, res) => {
    const { jobTitle, location } = req.query;
    if (!jobTitle && !location) {
        res.status(422).send("Missing params: jobTitle and location");
    }
    else if (!jobTitle) {
        res.status(422).send("Missing param: jobTitle");
    }
    else if (!location) {
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
                res.status(404).send("No jobs found.");
            } else {
                res.json(jobs);
            }
        } catch (e) {
            res.status(500).send("There was an error finding jobs.");
        }
    }
});

router.get('/enterJobs', authenticate, (req, res) => {
    res.render('index');
});

export default router;
