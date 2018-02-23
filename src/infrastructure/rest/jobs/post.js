const express = require('express');
const router = express.Router();

router.post('/test', async (req, res, next) => {
    res.send("This is a test post route");
});

export default router;