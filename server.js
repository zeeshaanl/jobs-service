import express from 'express';
import FindJobsUseCase from './src/application/usecase/FindJobsUseCase';
import SearchObject from './src/domain/searchObject/SearchObject';
import SequelizeDatabaseInit from './src/infrastructure/repository/database/SequelizeDatabaseInit';
import SequelizeRepo from './src/infrastructure/repository/SequelizeRepo';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const sequelizeDatabaseObject = new SequelizeDatabaseInit();
const sequelizeRepo = new SequelizeRepo(sequelizeDatabaseObject);

app.get('/getJobs', async (req, res) => {
    console.log(req.query, 'req.query');
    const { jobTitle, city } = req.query;

    if (!jobTitle && !city) {
        res.status(422).send("Missing params: jobTitle and city");
    }
    if (!jobTitle) {
        res.status(422).send("Missing param: jobTitle");
    }
    if (!city) {
        res.status(422).send("Missing param: city");
    }
    try {
        const searchObject = new SearchObject({
            jobTitle,
            city
        });
        const findJobsUseCase = new FindJobsUseCase(sequelizeRepo);
        const jobs = await findJobsUseCase.invoke(searchObject);
        if (!jobs || !jobs.length) {
            res.status(404).send("No jobs found.");
        }
        res.json(jobs);
    } catch (e) {
        res.status(500).send("There was an error finding jobs.");
    }
});

app.listen(4444, () => console.log('listening on port 4444'));