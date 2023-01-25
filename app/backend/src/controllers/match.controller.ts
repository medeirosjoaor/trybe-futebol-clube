import { Request, Response } from 'express';
import MatchService from '../services/match.service';
import TeamService from '../services/team.service';
import IMatch from '../interfaces/Match';
import Campaign from '../Campaign';
import Standings from '../Standings';

class MatchController {
  constructor(private _service = new MatchService(), private _teamService = new TeamService()) {}

  public create = async (request: Request, response: Response) => {
    const { body } = request as { body: IMatch };

    const match = await this._service.create(body);

    return response.status(201).json(match);
  };

  public findAll = async (request: Request, response: Response) => {
    const { inProgress } = request.query as { inProgress: 'true' | 'false' | undefined };

    const matches = inProgress === undefined
      ? await this._service.findAll()
      : await this._service.findAllInOrNotInProgress(inProgress === 'true');

    return response.status(200).json(matches);
  };

  public getHomeLeaderboard = async (_: Request, response: Response) => {
    const names = await this._teamService.findAll();
    const goalsFavor = await this._service.getHomeGoalsFavor();
    const goalsOwn = await this._service.getHomeGoalsOwn();

    const standings = new Standings();

    names.forEach((v, i) => {
      const campaign = new Campaign(v.teamName, goalsFavor[i].goalsFavor, goalsOwn[i].goalsOwn);

      standings.push(campaign.campaign);
    });

    standings.sort();

    return response.status(200).json(standings.standings);
  };

  public finishMatch = async (request: Request, response: Response) => {
    const { id } = request.params;

    await this._service.finishMatch(id);

    return response.status(200).json({ message: 'Finished' });
  };

  public updateScore = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { body } = request as { body: IMatch };

    await this._service.updateScore(id, body);

    return response.status(200).json({ id, ...body });
  };
}

export default MatchController;
