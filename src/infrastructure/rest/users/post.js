import Job from '../../../domain/entity/Job';
import appContainerInstance from '../../../AppContainer';
import User from '../../../domain/entity/User';
import jwtAuthenticate from '../jwtAuth/jwtAuthenticate';
import express from 'express';

const router = express.Router();

router.post('/createUser', jwtAuthenticate, async (req, res) => {
    try {
        const { userId, firstName, lastName, email, telephone } = req.body;

        console.log(req.body, 'req body!');

        const user = new User({ id: userId, firstName, lastName, email, telephone });
        console.log(user);
        const usercreateobject = await appContainerInstance.userSignupUseCase.invoke(user);
        console.log(usercreateobject, 'userfbetarobject');
        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(`Something went wrong, user not created. Error: ${e}`);
    }
});

export default router;
