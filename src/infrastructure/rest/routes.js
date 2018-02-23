import getJobs from './jobs/get';
import postJobs from './jobs/post';

const express = require('express');
const router = express.Router();

router.use(getJobs);
router.use(postJobs);

router.use((req, res) => {
    res.status(404).send('This route does not exist :)');
});

// catch 404 and forward to error handler
// router.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handler
// router.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = err;
//
//     // render the error page
//     res.status(err.status || 500);
//     res.send('error');
// });

export default router;