// Use spies and hooks ie.
// beforeEach, afterEach to test the function sendPaymentRequestToApi
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
	let consoleSpy;
	let functionStub;

	beforeEach(() => {
		consoleSpy = sinon.spy(console, 'log');
		functionStub = sinon.stub(Utils, 'calculateNumber');
	});

	afterEach(() => {
		consoleSpy.restore();
		functionStub.restore();
	});

	it('should call Utils.calculateNumber', () => {
		functionStub.returns(10);

		sendPaymentRequestToApi(100, 20);

		expect(functionStub.calledWithExactly('SUM', 100, 20)).to.be.true;
		expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
		expect(consoleSpy.calledOnce).to.be.true;
		expect(Utils.calculateNumber(100, 20)).to.equal(10);
	});
});
