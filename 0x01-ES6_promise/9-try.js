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
    queue.push(mathFunction());
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
