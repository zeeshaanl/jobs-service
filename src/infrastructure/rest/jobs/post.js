const express = require('express');
const router = express.Router();

router.post('/postJobs', async (req, res) => {
    const { title, companyName, description, applyLink, city } = req.body;
    console.log(req.body);
    res.send(200);
});

export default router;