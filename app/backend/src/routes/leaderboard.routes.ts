import { Router } from 'express';
import MatchController from '../controllers/match.controller';

const router = Router();

const matchController = new MatchController();

router.get('/leaderboard/home', matchController.getHomeLeaderboard);

export default router;
