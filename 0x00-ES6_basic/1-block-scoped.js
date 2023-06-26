/**
 * This function takes a boolean value as input and returns an array of two boolean values.
 * The function declares two variables, task and task2, and initializes them
 * to false and true, respectively.
 * If the input value is true, the function declares two new variables with
 * the same names as the previous ones, but with block scope, and assigns them
 * the values true and false, respectively.
 * The function then returns an array containing the values of the two task variables.
 * @param {boolean} trueOrFalse - A boolean value that determines whether to
 * update the task variables or not.
 * @returns {Array<boolean>} An array containing two boolean values.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
