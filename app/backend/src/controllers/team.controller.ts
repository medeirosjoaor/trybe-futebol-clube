import { Request, Response } from 'express';
import TeamService from '../services/team.service';

class TeamController {
  constructor(private _service = new TeamService()) {}

  public findAll = async (_: Request, response: Response) => {
    const teams = await this._service.findAll();

    return response.status(200).send(teams);
  };

  public findByPk = async (request: Request, response: Response) => {
    const { id } = request.params;

    const team = await this._service.findByPk(Number(id));

    if (!team) {
      return response.status(404).end();
    }

    return response.status(200).json(team);
  };
}

export default TeamController;
