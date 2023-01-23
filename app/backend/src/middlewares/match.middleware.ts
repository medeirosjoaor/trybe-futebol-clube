import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/team.service';
import IMatch from '../interfaces/Match';
import JsonWebToken from '../utils/JsonWebToken';

const jsonWebToken = new JsonWebToken();

class MatchMiddleware {
  constructor(private _teamService = new TeamService()) {}

  public validateIds = async (request: Request, response: Response, next: NextFunction) => {
    const { homeTeamId, awayTeamId } = request.body as IMatch;

    if (homeTeamId === awayTeamId) {
      return response.status(422).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }

    const homeTeam = await this._teamService.findByPk(homeTeamId as number);
    const awayTeam = await this._teamService.findByPk(awayTeamId as number);

    if (!homeTeam || !awayTeam) {
      return response.status(404).json({ message: 'There is no team with such id!' });
    }

    next();
  };

  public validateToken = async (request: Request, response: Response, next: NextFunction) => {
    const token = request.header('authorization');

    if (!token) {
      return response.status(401).end();
    }

    const user = jsonWebToken.decode(token as string);

    if (!user) {
      return response.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  };
}

export default MatchMiddleware;
