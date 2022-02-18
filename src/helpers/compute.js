export function compute({
  years = 1, startAmount = 0, contributionPerAmount = 0, contributionFrequencyPerYear = 0, compoundingPerYear = 1, percentage = 0,
}) {
  const MONTHS_PER_YEAR = 12;
  const cycles = Math.max(MONTHS_PER_YEAR, compoundingPerYear, contributionFrequencyPerYear);
  const rContribution = cycles / contributionFrequencyPerYear;
  const rCompounding = cycles / compoundingPerYear;
  let result = startAmount;
  for (let year = 1; year <= years; year++) {
    for (let cycle = 1; cycle <= cycles; cycle++) {
      if (cycle % rCompounding === 0 && compoundingPerYear !== 0) {
        result += computeNewInterest(percentage, result, compoundingPerYear);
      }
      if (cycle % rContribution === 0) {
        result += contributionPerAmount;
      }
    }
  }
  return result;
}
compute({
  startAmount: 1000,
  compoundingPerYear: 1,
  years: 20,
  percentage: 5,
  contributionFrequencyPerYear: 0,
  contributionPerAmount: 0,
});
function computeNewInterest(percentage, amount, compoundRatio) {
  return percentage / 100 * amount / compoundRatio;
}

// function addInterestToAmount(amount, interest) {
// 	return amount + interest;
// }

// function addContributionToAmount(amount, contribution) {
// 	return contribution + amount;
// }
// // console.log(computeNewInterest(10, 100, 12))
