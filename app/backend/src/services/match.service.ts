import Match from '../database/models/Match';
import Team from '../database/models/Team';
import IMatch from '../interfaces/Match';

class MatchService {
  constructor(private _model = Match) {}

  public async create(body: IMatch): Promise<IMatch> {
    const match = await this._model.create({ ...body, inProgress: true });

    return match;
  }

  public async findAll(): Promise<IMatch[]> {
    const matches = await this._model.findAll({
      include: [
        { as: 'homeTeam', attributes: ['teamName'], model: Team },
        { as: 'awayTeam', attributes: ['teamName'], model: Team },
      ],
    });

    return matches;
  }

  public async findAllInOrNotInProgress(inProgress: boolean): Promise<IMatch[]> {
    const matches = await this._model.findAll({
      include: [
        { as: 'homeTeam', attributes: ['teamName'], model: Team },
        { as: 'awayTeam', attributes: ['teamName'], model: Team },
      ],
      where: { inProgress },
    });

    return matches;
  }

  public async finishMatch(id: string): Promise<void> {
    await this._model.update({ inProgress: false }, { where: { id } });
  }

  public async updateScore(id: string, body: IMatch): Promise<void> {
    const { homeTeamGoals, awayTeamGoals } = body;

    await this._model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}

export default MatchService;
