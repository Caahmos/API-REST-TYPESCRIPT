import { Router, Request, Response } from 'express';
import CreateUserController from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import DetailUserController from '../controllers/user/DetailUserController'
import { DeleteUserController } from '../controllers/user/DeleteUserController';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import CreateCategoryController from '../controllers/category/CreateCategoryController';
import UpdateCategoryController from '../controllers/category/UpdateCategoryController';
import FindCategoryController from '../controllers/category/FindCategoryController';
import DeleteCategoryController from '../controllers/category/DeleteCategoryController';
import CreateProductController from '../controllers/product/CreateProductController';
import multer from 'multer';
import uploadConfig from '../config/multer';

const router = Router();
const update = multer(uploadConfig.upload('./tmp'));

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ message: 'Deu certo!' });
});

router.post('/createuser', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/finduser', isAuthenticated, new DetailUserController().handle);
router.delete('/deleteuser', isAuthenticated, new DeleteUserController().handle);

router.post('/category/create', isAuthenticated, new CreateCategoryController().handle);
router.patch('/category/update/:id', isAuthenticated, new UpdateCategoryController().handle);
router.get('/category/findall', isAuthenticated, new FindCategoryController().handle);
router.delete('/category/delete/:id', isAuthenticated, new DeleteCategoryController().handle);

router.post('/product/create', isAuthenticated, update.single('file'), new CreateProductController().handle);

export default router;