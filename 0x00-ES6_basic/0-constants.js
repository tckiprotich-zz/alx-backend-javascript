/**
 * This module exports three functions:
 * - taskFirst: returns a string "I prefer const when I can." using the const keyword to declare a variable.
 * - getLast: returns a string " is okay".
 * - taskNext: uses the let keyword to declare a variable and returns a string "But sometimes let is okay".
 * 
 * To declare a variable in ES6, we use one of two keywords: const or let.
 * const is short for constant. It's used for variables that we don't expect to change.
 * let is used for variables that we do expect to change.
 */

export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

export function getLast() {
    return ' is okay';
}

export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}

console.log(`${taskFirst()} ${taskNext()}`);

// Add a blank line at the end of the file