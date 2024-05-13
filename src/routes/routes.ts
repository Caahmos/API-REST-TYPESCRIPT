import { Router, Request, Response } from 'express';
import CreateUserController from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import FindUserController from '../controllers/user/FindUserController'
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ message: 'Deu certo!' });
});

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/finduser', isAuthenticated, new FindUserController().handle)


export default router;