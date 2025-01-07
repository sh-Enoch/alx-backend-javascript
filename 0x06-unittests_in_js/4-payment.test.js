const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
	it('should call Util.calculateNumber', () => {
		const functionStub = sinon.stub(Utils, 'calculateNumber').returns(10);

		const consoleSpy = sinon.spy(console, 'log');

		const paymentRequest = sendPaymentRequestToApi(100, 20);

		expect(functionStub.calledWithExactly('SUM', 100, 20)).to.true;
		expect(consoleSpy.calledWithExactly('The total is: 10')).to.true;
		expect(consoleSpy.calledOnce).to.true;
		expect(Utils.calculateNumber(100, 20)).to.equal(10);

		functionStub.restore();
		consoleSpy.restore();
	});
});
