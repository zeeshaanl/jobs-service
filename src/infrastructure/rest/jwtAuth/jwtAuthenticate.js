import firebaseAdminInstance from '../../firebase/init';

const jwtAuthenticate = async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    try {
        const authToken = authHeader.split(' ')[1]; // Split on a space, the original auth looks like  "Bearer Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part
        /**
         *
         * @type {string}
         */
        req.body.userId = await firebaseAdminInstance.verifyIdToken(authToken);
    } catch (e) {
        console.log(e, 'error');
        return res.status(401).send({ auth: false, message: e });
    }

    return next();
};

export default jwtAuthenticate;
