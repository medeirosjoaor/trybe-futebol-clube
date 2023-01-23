import { Request, Response } from 'express';
import JsonWebToken from '../utils/JsonWebToken';
import UserService from '../services/user.service';
import IUser from '../interfaces/User';
import User from '../database/models/User';

const jsonWebToken = new JsonWebToken();

class UserController {
  constructor(private _service = new UserService()) {}

  public findOneByEmail = async (request: Request, response: Response) => {
    const { email } = request.body as IUser;

    const { dataValues } = await this._service.findOneByEmail(email) as User as {
      dataValues: IUser
    };

    const token = jsonWebToken.encode({
      email: dataValues.email,
      role: dataValues.role,
      username: dataValues.username,
    });

    return response.status(200).json({ token });
  };

  public validateToken = (request: Request, response: Response) => {
    const token = request.header('authorization');

    const { role } = jsonWebToken.decode(token as string);

    return response.status(200).json({ role });
  };
}

export default UserController;
