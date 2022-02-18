import { compute } from './compute';

describe('ccomputeCompoundingInterest', () => {
  it('should return 2653.30', () => {
    expect(compute({
      startAmount: 1000,
      compoundingPerYear: 1,
      years: 20,
      percentage: 5,
      contributionFrequencyPerYear: 0,
      contributionPerAmount: 0,
    }).toFixed(2)).toEqual('2653.30');
  });
});
