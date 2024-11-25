import { app, server } from '../app.js';  // Import the server
import { use, expect } from 'chai';
import chaiHttp from 'chai-http';

const chai = use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World', (done) => {
    chai.request.execute(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World');
        done();  // End the test properly
      });
  });

  after(() => {
    server.close();  // Stop the server after tests are complete
  });
});
