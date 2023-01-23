import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import UserService from '../services/user.service';
import IUser from '../interfaces/User';
import User from '../database/models/User';

class UserMiddleware {
  constructor(private _service = new UserService()) {}

  public validateLogin = async (request: Request, response: Response, next: NextFunction) => {
    const { email, password } = request.body as IUser;

    if (!email || !password) {
      return response.status(400).json({ message: 'All fields must be filled' });
    }

    const user = await this._service.findOneByEmail(email) as User;

    if (!user) {
      return response.status(401).json({ message: 'Incorrect email or password' });
    }

    const { dataValues } = user as { dataValues: IUser };

    const match = await compare(password, dataValues.password as string);

    if (!match) {
      return response.status(401).json({ message: 'Incorrect email or password' });
    }

    next();
  };
}

export default UserMiddleware;
