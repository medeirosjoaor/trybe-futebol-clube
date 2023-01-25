import Team from '../database/models/Team';
import ITeam from '../interfaces/Team';

class TeamService {
  constructor(private _model = Team) {}

  public async findAll(): Promise<ITeam[]> {
    const teams = await this._model.findAll();

    return teams;
  }

  public async findByPk(id: number): Promise<ITeam | null> {
    const team = await this._model.findByPk(id);

    return team;
  }
}

export default TeamService;
