import { CreationOptional, ForeignKey, Model, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';
import Team from './Team';

class Match extends Model {
  declare id: CreationOptional<number>;
  declare homeTeamId: ForeignKey<Team['id']>;
  declare homeTeamGoals: number;
  declare awayTeamId: ForeignKey<Team['id']>;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeamId: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamId: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  sequelize: db,
  tableName: 'matches',
  timestamps: false,
  underscored: true,
});

export default Match;
