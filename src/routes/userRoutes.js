import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/list/', userController.index);
router.post('/create/', userController.create);
router.get('/detail/:id', userController.detail);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.detele);

export default router;
