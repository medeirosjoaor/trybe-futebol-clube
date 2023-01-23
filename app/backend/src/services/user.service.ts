import IUser from '../interfaces/User';
import User from '../database/models/User';

class UserService {
  constructor(private _model = User) {}

  public async findOneByEmail(email: string): Promise<IUser | null> {
    const user = await this._model.findOne({ where: { email } });

    return user;
  }
}

export default UserService;
