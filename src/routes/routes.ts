import { Router, Request, Response } from 'express';
import CreateUserController from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import DetailUserController from '../controllers/user/DetailUserController'
import { DeleteUserController } from '../controllers/user/DeleteUserController';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import CreateCategoryController from '../controllers/category/CreateCategoryController';
import UpdateCategoryController from '../controllers/category/UpdateCategoryController';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ message: 'Deu certo!' });
});

router.post('/createuser', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/finduser', isAuthenticated, new DetailUserController().handle);
router.delete('/deleteuser', isAuthenticated, new DeleteUserController().handle);

router.post('/category/create', isAuthenticated, new CreateCategoryController().handle);
router.patch('/category/update/:id?', isAuthenticated, new UpdateCategoryController().handle);


export default router;