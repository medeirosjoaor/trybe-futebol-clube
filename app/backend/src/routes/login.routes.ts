import { Router } from 'express';
import UserMiddleware from '../middlewares/user.middleware';
import UserController from '../controllers/user.controller';

const router = Router();

const userMiddleware = new UserMiddleware();
const userController = new UserController();

router.get('/login/validate', userController.validateToken);
router.post('/login', userMiddleware.validateLogin, userController.findOneByEmail);

export default router;
