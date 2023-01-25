import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Team from '../database/models/Team';
import { team, allTeams } from './mocks/team.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('team integration test', () => {
  it('should return one team', async () => {
    sinon.stub(Team, 'findByPk').resolves(team as Team);

    const { body, status } = await chai.request(app).get('/teams/1');

    expect(body).to.deep.equal(team);
    expect(status).to.equal(200);

    (Team.findByPk as sinon.SinonStub).restore();
  });

  it('should return all teams', async () => {
    sinon.stub(Team, 'findAll').resolves(allTeams as Team[]);

    const { body, status } = await chai.request(app).get('/teams');

    expect(body).to.deep.equal(allTeams);
    expect(status).to.equal(200);

    (Team.findAll as sinon.SinonStub).restore();
  });

  it('should return no team', async () => {
    sinon.stub(Team, 'findByPk').resolves(null);

    const { body, status } = await chai.request(app).get('/teams/5');

    expect(body).to.be.empty;
    expect(status).to.equal(404);
  });
});
