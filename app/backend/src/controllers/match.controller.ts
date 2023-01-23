import { Request, Response } from 'express';
import MatchService from '../services/match.service';

class MatchController {
  constructor(private _service = new MatchService()) {}

  public findAll = async (request: Request, response: Response) => {
    const { inProgress } = request.query as { inProgress: 'true' | 'false' | undefined };

    const matches = inProgress === undefined
      ? await this._service.findAll()
      : await this._service.findAllInOrNotInProgress(inProgress === 'true');

    return response.status(200).json(matches);
  };
}

export default MatchController;
