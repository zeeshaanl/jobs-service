import Job from '../../../domain/entity/Job';
import appContainerInstance from '../../../AppContainer';

const express = require('express');
const router = express.Router();

router.post('/postJobs', async (req, res) => {
    const { title, companyName, description, applyLink, city } = req.body;
    const job = new Job({ title, companyName, description, applyLink, city });
    try {
        await appContainerInstance.saveCustomJobUseCase.invoke(job);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(`Something went wrong, job not saved. Error: ${e}`);
    }
});

export default router;