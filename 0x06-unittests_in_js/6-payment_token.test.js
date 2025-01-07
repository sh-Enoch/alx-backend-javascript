const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {
	it('should resolve with successful response', (done) => {
		getPaymentTokenFromAPI(true)
			.then((response) => {
				expect(response).to.deep.equal({
					data: 'Successful response from the API',
				});
				done();
			})
			.catch((error) => {
				done(error);
			});
	});
});
