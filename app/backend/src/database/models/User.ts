import { CreationOptional, Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare role: string;
  declare username: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  email: {
    allowNull: false,
    type: STRING(255),
  },
  password: {
    allowNull: false,
    type: STRING(255),
  },
  role: {
    allowNull: false,
    type: STRING(255),
  },
  username: {
    allowNull: false,
    type: STRING(255),
  },
}, {
  sequelize: db,
  tableName: 'users',
  timestamps: false,
});

export default User;
