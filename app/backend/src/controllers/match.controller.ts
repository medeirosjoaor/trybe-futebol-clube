import { Request, Response } from 'express';
import MatchService from '../services/match.service';
import IMatch from '../interfaces/Match';

class MatchController {
  constructor(private _service = new MatchService()) {}

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
