import Job from '../../../domain/entity/Job';
import appContainerInstance from '../../../AppContainer';
import User from '../../../domain/entity/User';

const express = require('express');
const router = express.Router();

router.post('/createUser', async (req, res) => {
    const { authToken, firstName, lastName, email, telephone } = req.body;

    admin.auth().verifyIdToken(idToken)
        .then(function (decodedToken) {
            var uid = decodedToken.uid;
            // ...
        }).catch(function (error) {
        // Handle error
    });

    const user = new User({ uid, firstName, lastName, email, telephone });

    try {
        await appContainerInstance.createUserUseCase.invoke(user);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(`Something went wrong, user not created. Error: ${e}`);
    }
});

export default router;