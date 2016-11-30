'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let assert = chai.assert;

let app = require("../app")

chai.use(chaiHttp);
//Our parent block
describe('Actions', () => {
/*
  * Test the /GET route
  */
  describe('/GET action 42', () => {
      it('it should GET action 42', (done) => {
        chai.request(app)
            .get('/actions/42')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                assert.equal(res.body.actionId,42);
              done();
            });
      });
  });

});