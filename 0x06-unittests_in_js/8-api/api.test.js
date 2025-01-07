const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const app = require('./api.js');

chai.use(chaiHttp);

describe('Index page', () => {
	it('should return status code 200', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				done();
			});
	});

	it('should return the message "Welcome to the payment system"', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res.text).to.equal('Welcome to the payment system');
				done();
			});
	});

	it('test port number 7865', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				done();
			});
	});
});
