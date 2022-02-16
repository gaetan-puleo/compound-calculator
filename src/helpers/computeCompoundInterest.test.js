import computeCompoundingInterest from './computeCompoundInterest';

describe('ccomputeCompoundingInterest', () => {
	it('should return 2653.30', () => {
		const start = 1000;
		const rate = 5;
		const compoundingFrequency = 1;
		const years = 20;
		expect( computeCompoundingInterest({startAmount: start, rate, compoundingFrequency, period: years}).toFixed(2)).toEqual('2653.30')
	})
})
