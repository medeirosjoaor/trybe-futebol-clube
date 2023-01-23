import { Router } from 'express';
import MatchMiddleware from '../middlewares/match.middleware';
import MatchController from '../controllers/match.controller';

const router = Router();

const matchMiddleware = new MatchMiddleware();
const matchController = new MatchController();

router.get('/matches', matchController.findAll);
router.post(
  '/matches',
  matchMiddleware.validateToken,
  matchMiddleware.validateIds,
  matchController.create,
);
router.patch('/matches/:id/finish', matchController.finishMatch);
router.patch('/matches/:id', matchController.updateScore);

export default router;
