import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const router = Router();

const teamController = new TeamController();

router.get('/teams/:id', teamController.findByPk);
router.get('/teams', teamController.findAll);

export default router;
