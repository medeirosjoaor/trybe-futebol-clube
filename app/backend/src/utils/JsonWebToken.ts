import { Secret, SignOptions, sign, verify } from 'jsonwebtoken';
import IUser from '../interfaces/User';

class JsonWebToken {
  private _secret: Secret;
  private _signOptions: SignOptions;

  constructor() {
    this._secret = process.env.JWT_SECRET as string;
    this._signOptions = { algorithm: 'HS256', expiresIn: '7d' };
  }

  public encode(payload: IUser) {
    const token = sign(payload, this._secret, this._signOptions);

    return token;
  }

  public decode(token: string) {
    try {
      const decoded = verify(token, this._secret);

      return decoded as IUser;
    } catch ({ message }) {
      return undefined;
    }
  }
}

export default JsonWebToken;
