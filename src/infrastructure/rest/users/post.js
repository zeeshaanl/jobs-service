import Job from '../../../domain/entity/Job';
import appContainerInstance from '../../../AppContainer';
import User from '../../../domain/entity/User';
import jwtAuthenticate from '../jwtAuth/jwtAuthenticate';

const express = require('express');
const router = express.Router();

router.post('/createUser', jwtAuthenticate, async (req, res) => {
    const { uid, firstName, lastName, email, telephone } = req.body;

    console.log(req.body, 'req body!');

    const user = new User({ uid, firstName, lastName, email, telephone });
    console.log(user);

    try {
        // await appContainerInstance.createUserUseCase.invoke(user);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(`Something went wrong, user not created. Error: ${e}`);
    }
});

export default router;