import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('request received');
    res.send('in Express app!')
});

app.listen(4444, () => console.log('listening on port 4444'));