import chai , {expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);
let listId:any;

before('Get the List Id', async () => {
  const response = await chai.request(app).post('/api/v1/list').send({ listName: "Eat the Rich" });

  listId = response.body.data.id;
});

describe('Task', () => {

  it('should create a task', (done) => {
    chai.request(app)
      .post('/api/v1/task')
      .send({
        listId,
        task: "Increase their Tax"
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
    })
  })
})