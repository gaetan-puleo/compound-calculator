export default function computeCompoundInterest({
  period, startAmount, rate, compoundingFrequency,
}) {
  const realRate = rate / 100;
  const result = startAmount * (1 + realRate / compoundingFrequency) ** (compoundingFrequency * period);
  return result;
}
