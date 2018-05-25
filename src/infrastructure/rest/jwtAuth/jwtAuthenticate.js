const jwtAuthenticate = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    // admin.auth().verifyIdToken(idToken)
    //     .then(function (decodedToken) {
    //         var uid = decodedToken.uid;
    //         // ...
    //     }).catch(function (error) {
    //     // Handle error
    // });

    req.body.uid = 123;

    return next();
};

export default jwtAuthenticate;
