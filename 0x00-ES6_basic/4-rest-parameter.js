/**
 * Calculates the number of arguments passed to the function.
 * @param {...*} args - The arguments to count.
 * @returns {number} The number of arguments passed to the function.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
