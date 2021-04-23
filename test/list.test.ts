import chai , {expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);
describe('List', () => {

  it('should create a list', (done) => {
    chai.request(app)
      .post('/api/v1/list')
      .send({
      listName: "My List"
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.be.a('object');
        expect(res.body.data.listName).to.equal('My List')
        done();
    })
  });
})