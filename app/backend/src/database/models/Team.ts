import { CreationOptional, Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Team extends Model {
  declare id: CreationOptional<number>;
  declare teamName: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING(255),
  },
}, {
  sequelize: db,
  tableName: 'teams',
  timestamps: false,
  underscored: true,
});

export default Team;
