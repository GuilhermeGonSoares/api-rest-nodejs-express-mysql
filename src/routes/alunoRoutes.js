import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.detail);
router.post('/', loginRequired, alunoController.create);
router.put('/:id', alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
