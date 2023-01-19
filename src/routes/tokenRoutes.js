import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.get('/', tokenController.create);

export default router;
