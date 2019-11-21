import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

const should = chai.should();

const signUpUser = {
  fullName: 'New User',
  email: 'newuser@test.com',
  password: 'newuserPassword',
};

describe('AUTHENTICATION APP', () => {
  it('should show default route', (done) => {
    chai.request(app)
      .get('/v1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Welcome to this page!');
        done(err);
      });
  });

  it('should show error on other random route', (done) => {
    chai.request(app)
      .get('/v1/m')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').equal('The page cannot be found!');
        done(err);
      });
  });

  it('should return error for failed field signup validation', (done) => {
    chai.request(app)
      .post('/v1/user/signup')
      .send({})
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('status').equal('error');
        done(err);
      });
  });

  it('should register user successfully', (done) => {
    chai.request(app)
      .post('/v1/user/signup')
      .send(signUpUser)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('status').equal('success');
        done(err);
      });
  });

  it('should return error to confirm the newly created account', (done) => {
    chai.request(app)
      .post('/v1/user/auth')
      .send({
        email: 'newuser@test.com',
        password: 'newuserPassword',
      })
      .end((err, res) => {
        res.should.have.status(406);
        res.body.should.have.property('status').equal('error');
        res.body.should.have.property('message').equal('You are not yet verified!');
        done(err);
      });
  });

  it('should return error for signin failed field validation', (done) => {
    chai.request(app)
      .post('/v1/user/auth')
      .send({})
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status').equal('error');
        done(err);
      });
  });

  it('should successfully sign in user', (done) => {
    chai.request(app)
      .post('/v1/user/auth')
      .send({
        email: 'jondoe@mail.com',
        password: 'newPassword',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('status').equal('success');
        res.body.should.have.property('data');
        done(err);
      });
  });
});
