import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/list/', loginRequired, userController.index);
router.post('/create/', userController.create);
router.get('/detail/:id', loginRequired, userController.detail);
router.put('/update/:id', loginRequired, userController.update);
router.delete('/delete/:id', loginRequired, userController.detele);

export default router;
