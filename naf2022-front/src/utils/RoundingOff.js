export default function roundTo(n) {
  const multiplicator = Math.pow(10, 2);
  n = parseFloat((n * multiplicator).toFixed(11));
  const test = Math.round(n) / multiplicator;
  return +test.toFixed(2);
}
