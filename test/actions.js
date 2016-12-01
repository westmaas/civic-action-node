'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let assert = chai.assert;

let knex = require('../db');
let app = require("../app")

chai.use(chaiHttp);
//Our parent block
describe('Actions', () => {
  beforeEach(function() {
    return knex.migrate.rollback()
      .then(function() {
        return knex.migrate.latest();
      })
      .then(function() {
        return knex.seed.run();
      });
  });
 /*
  * Test the /GET route on existing action
  */
  describe('/GET action 2', () => {
      it('it should GET action 2', (done) => {
        chai.request(app)
            .get('/actions/2')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                assert.equal(res.body.id,2);
                assert.equal(res.body.name,"action 2");
                assert.equal(res.body.description,"description 2");
              done();
            });
      });
  });

 /*
  * Test the /GET route on a non-existant action
  */
  describe('/GET on non-existant action', () => {
      it('it should fail to GET action 42', (done) => {
        chai.request(app)
            .get('/actions/42')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
              done();
            });
      });
  });

});