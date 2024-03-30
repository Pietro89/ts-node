import chai from "chai";
import "mocha";
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

import {app} from  "@app"

describe('Hello Controller - GET', () => {
    it('should return a 401 without a token', async () => {
        const res = await chai.request(app).get('/hello')
        chai.expect(res.status).to.equal(401);
    })
})
