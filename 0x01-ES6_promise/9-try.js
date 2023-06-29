/**
 * Executes a given math function and returns an array containing the result or error message,
 * followed by a string indicating that the guardrail was processed.
 * @param {function} mathFunction - The math function to execute.
 * @returns {array} An array containing the result or error message,
 *  followed by a string indicating that the guardrail was processed.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
