import SearchObject from '../../../domain/searchObject/SearchObject';
import appContainerInstance from '../../../AppContainer';
import authenticate from '../basicAuth/authenticate';

const express = require('express');
const router = express.Router();

router.get('/jobs', async (req, res) => {
    const { jobTitle, city } = req.query;
    if (!jobTitle && !city) {
        res.status(422).send("Missing params: jobTitle and city");
    }
    else if (!jobTitle) {
        res.status(422).send("Missing param: jobTitle");
    }
    else if (!city) {
        res.status(422).send("Missing param: city");
    }
    else {
        try {
            const searchObject = new SearchObject({
                jobTitle,
                city
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
