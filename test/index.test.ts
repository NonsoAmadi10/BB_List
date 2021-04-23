import chai , {expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../src'; 

chai.use(chaiHttp);


describe('GET /', () => {
    it('should get the APIs Welcome Message', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) =>{
            expect(res.status).to.be.equal(200);
            
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equal("Welcome to Nonso's API")
       
        done();
        } );
    });
});