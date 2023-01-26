import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Team from '../database/models/Team';
import Match from '../database/models/Match';

import {
  teamNames,
  homeGoalsFavor,
  homeGoalsOwn,
  awayGoalsFavor,
  awayGoalsOwn,
  homeStandings,
  awayStandings,
  generalStandings,
} from './mocks/leaderboard.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('leaderboard integration test', () => {
  it('should return the home standings', async () => {
    sinon.stub(Team, 'findAll').resolves(teamNames as Team[]);
    sinon.stub(Match, 'findAll')
    .onFirstCall().resolves(homeGoalsFavor as [])
    .onSecondCall().resolves(homeGoalsOwn as []);

    const { body, status } = await chai.request(app).get('/leaderboard/home');

    expect(body).to.deep.equal(homeStandings);
    expect(status).to.equal(200);
  });

  it('should return the away standings', async () => {
    sinon.stub(Team, 'findAll').resolves(teamNames as Team[]);
    sinon.stub(Match, 'findAll')
    .onFirstCall().resolves(awayGoalsFavor as [])
    .onSecondCall().resolves(awayGoalsOwn as []);

    const { body, status } = await chai.request(app).get('/leaderboard/away');

    expect(body).to.deep.equal(awayStandings);
    expect(status).to.equal(200);
  });

  it('should return the general standings', async () => {
    sinon.stub(Team, 'findAll').resolves(teamNames as Team[]);
    sinon.stub(Match, 'findAll')
    .onCall(0).resolves(homeGoalsFavor as [])
    .onCall(1).resolves(homeGoalsOwn as [])
    .onCall(2).resolves(awayGoalsFavor as [])
    .onCall(3).resolves(awayGoalsOwn as [])

    const { body, status } = await chai.request(app).get('/leaderboard');

    expect(body).to.deep.equal(generalStandings);
    expect(status).to.equal(200);
  });

  afterEach(() => {
    (Team.findAll as sinon.SinonStub).restore();
    (Match.findAll as sinon.SinonStub).restore();
  });
});
