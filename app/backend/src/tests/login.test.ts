import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import User from '../database/models/User';
import * as bcryptjs from 'bcryptjs';
import JsonWebToken from '../utils/JsonWebToken';

chai.use(chaiHttp);

const { expect } = chai;

describe('login integration test', () => {
  it('should log in a user', async () => {
    sinon.stub(User, 'findOne').resolves({ 
      dataValues: { 
        email: "travis@scott.com", 
        password: "$2a$16$hRUsBCxnMFytvJjHXvXd4OsUR6BJr7EY2EX6uVnDy7.Zhkr8Bonbq" 
      },
    } as User);

    sinon.stub(bcryptjs, 'compare').resolves(true);

    const { body, status } = await chai.request(app).post('/login').send({
      email: "travis@scott.com",
      password: "HIGHESTINTHEROOM",
    });

    expect(body.token).to.be.a.string;
    expect(status).to.equal(200);

    (User.findOne as sinon.SinonStub).restore();
    (bcryptjs.compare as sinon.SinonStub).restore();
  });

  it('should not log in a user with a missing email', async () => {
    const { body, status } = await chai.request(app).post('/login').send({ password: "HIGHESTINTHEROOM" });

    expect(body).to.deep.equal({ message: 'All fields must be filled' });
    expect(status).to.equal(400);
  });

  it('should not log in a user with a missing password', async () => {
    const { body, status } = await chai.request(app).post('/login').send({ email: "travis@scott.com" });

    expect(body).to.deep.equal({ message: 'All fields must be filled' });
    expect(status).to.equal(400);
  });

  it("should not log in a user that doesn't exist", async () => {
    sinon.stub(User, 'findOne').resolves(null);

    const { body, status } = await chai.request(app).post('/login').send({ 
      email: "metro@boomin.com",
      password: "raindrops(insane)",
    });

    expect(body).to.deep.equal({ message: 'Incorrect email or password' });
    expect(status).to.equal(401);

    (User.findOne as sinon.SinonStub).restore();
  });

  it('should not log in a user with a incorrect password', async () => {
    sinon.stub(User, 'findOne').resolves({ 
      dataValues: { 
        email: "metro@boomin.com", 
        password: "$2a$16$okMGZgoB900wfbifzjhTdeOaekijd63ML2URGs.YpF8Hxs2leIWE." 
      },
    } as User);

    sinon.stub(bcryptjs, 'compare').resolves(false);

    const { body, status } = await chai.request(app).post('/login').send({ 
      email: "metro@boomin.com",
      password: "raindrops(sane)",
    });

    expect(body).to.deep.equal({ message: 'Incorrect email or password' });
    expect(status).to.equal(401);

    (User.findOne as sinon.SinonStub).restore();
    (bcryptjs.compare as sinon.SinonStub).restore();
  });

  it("should return the user's role", async () => {
    sinon.stub(User, 'findOne').resolves({ 
      dataValues: {
        username: "laflame",
        role: "user",
        email: "travis@scott.com",
        password: "$2a$16$hRUsBCxnMFytvJjHXvXd4OsUR6BJr7EY2EX6uVnDy7.Zhkr8Bonbq",
      },
    } as User);

    sinon.stub(bcryptjs, 'compare').resolves(true);

    sinon.stub(JsonWebToken.prototype, 'decode').returns({
      username: "laflame",
      role: "user",
      email: "travis@scott.com",
      password: "$2a$16$hRUsBCxnMFytvJjHXvXd4OsUR6BJr7EY2EX6uVnDy7.Zhkr8Bonbq",
    });

    const { body, status } = await chai.request(app).get('/login/validate').set('authorization', 'asdf');

    expect(body).to.deep.equal({ role: 'user' });
    expect(status).to.equal(200);

    (User.findOne as sinon.SinonStub).restore();
    (bcryptjs.compare as sinon.SinonStub).restore();
    (JsonWebToken.prototype.decode as sinon.SinonStub).restore();
  });
});
