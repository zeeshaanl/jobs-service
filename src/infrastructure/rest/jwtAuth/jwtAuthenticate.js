import firebaseAdminInstance from '../../firebase/init';

const jwtAuthenticate = async (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    try {
        req.body.uid = await firebaseAdminInstance.verifyIdToken(token);
    } catch (e) {
        return res.status(401).send({ auth: false, message: e });
    }

    return next();
};

export default jwtAuthenticate;
