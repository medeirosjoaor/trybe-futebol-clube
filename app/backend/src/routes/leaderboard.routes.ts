import { Router } from 'express';
import MatchController from '../controllers/match.controller';

const router = Router();

const matchController = new MatchController();

router.get('/leaderboard', matchController.getLeaderboard);
router.get('/leaderboard/home', matchController.getHomeLeaderboard);
router.get('/leaderboard/away', matchController.getAwayLeaderboard);

export default router;
