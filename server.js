import express from 'express';

const app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.post('/getJobs', (req, res) => {
    console.log(req.body, 'req.body');
    res.send('in Express app!')
});

app.listen(4444, () => console.log('listening on port 4444'));