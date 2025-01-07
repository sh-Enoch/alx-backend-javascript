const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
	it('should call Util.calculateNumber', () => {
		const functionSpy = sinon.spy(Utils);

		sendPaymentRequestToApi(30, 20);

		expect(functionSpy.calculateNumber.calledWith('SUM', 30, 20)).to.true;
		expect(functionSpy.calculateNumber.calledOnce).to.true;

		functionSpy.calculateNumber.restore();
	});
