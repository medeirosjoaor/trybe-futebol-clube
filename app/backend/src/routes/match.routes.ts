import { Router } from 'express';
import MatchController from '../controllers/match.controller';

const router = Router();

const matchController = new MatchController();

router.get('/matches', matchController.findAll);

export default router;
