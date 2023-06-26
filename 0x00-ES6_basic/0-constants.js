// 0. Const or let?
// To declare a variable in ES6, we use one of two keywords: const or let.
// const is short for constant. It's used for variables that we don't expect to change.
// let is used for variables that we do expect to change.


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
  