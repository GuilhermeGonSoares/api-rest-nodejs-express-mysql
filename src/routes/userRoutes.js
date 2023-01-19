import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/list/', userController.index); // Lista usuários
router.get('/detail/:id', userController.detail); // Mostra usuário

router.post('/create/', userController.create);
router.put('/update/', loginRequired, userController.update);
router.delete('/delete/', loginRequired, userController.detele);

export default router;
