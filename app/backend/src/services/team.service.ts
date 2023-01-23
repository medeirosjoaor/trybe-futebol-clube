import Team from '../database/models/Team';

class TeamService {
  constructor(private _model = Team) {}

  public async findAll(): Promise<Team[]> {
    const teams = await this._model.findAll();

    return teams;
  }

  public async findByPk(id: number): Promise<Team | null> {
    const team = await this._model.findByPk(id);

    return team;
  }
}

export default TeamService;
