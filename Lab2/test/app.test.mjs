import app from '../app.js'
import { use, expect } from 'chai'
import chaiHttp from 'chai-http'
const chai = use(chaiHttp)

describe('GET /', () => {
  it('should return Hello World', (done) => {
    chai.request.execute(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err); // Pass error to Mocha if any
        expect(res).to.have.status(200); // Check for HTTP status 200
        expect('Hello World').to.equal(res.text); // Check the response body
        done(); // Signal that the test is complete
      });
  });
});
