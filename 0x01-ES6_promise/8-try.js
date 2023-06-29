/**
 * Divides two numbers and returns the result.
 * @param {number} numerator - The numerator of the division.
 * @param {number} denominator - The denominator of the division.
 * @throws {Error} If the denominator is 0.
 * @returns {number} The result of the division.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
