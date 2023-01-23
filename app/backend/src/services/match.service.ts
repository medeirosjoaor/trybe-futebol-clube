import Match from '../database/models/Match';
import Team from '../database/models/Team';

class MatchService {
  constructor(private _model = Match) {}

  public async findAll(): Promise<Match[]> {
    const matches = this._model.findAll({
      include: [
        { as: 'homeTeam', attributes: ['teamName'], model: Team },
        { as: 'awayTeam', attributes: ['teamName'], model: Team },
      ],
    });

    return matches;
  }

  public async findAllInOrNotInProgress(inProgress: boolean): Promise<Match[]> {
    const matches = this._model.findAll({
      include: [
        { as: 'homeTeam', attributes: ['teamName'], model: Team },
        { as: 'awayTeam', attributes: ['teamName'], model: Team },
      ],
      where: { inProgress },
    });

    return matches;
  }
}

export default MatchService;
