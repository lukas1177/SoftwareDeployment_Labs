import app from '../app.js'
import { use, expect } from 'chai'
import chaiHttp from 'chai-http'
const chai = use(chaiHttp)

describe('GET /', () => {
    it('should return Hello World', (done) => {
        chai.request.execute(app)
            .get('/')
            .end((err, res) => {
                expect('Hello, world!').to.equal(res.text);
                done();
            });
    });
});
