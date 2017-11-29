/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.values = [];
  this.index = 0;
}

Stack.prototype.push = function push(val) { // when using the arrow => binds, it automatically binds to what is calling it to the left of the period. And here we can't bind to the instance of stack (if we used the arrow functions), but want to bind to the constructor Stack object instead 
  if(!val) {throw new Error('need to include value')};
  this.values[this.index] = val;
  this.index = this.index +  1;
  return this.index;
}

Stack.prototype.pop = function pop() {
  debugger;
  const returnVal = this.values[this.index - 1];
  delete this.values[this.index];
  if(this.index > 0) this.index = this.index - 1;
  return returnVal;
}

Stack.prototype.getMax = function getMax() {
  return this.values.reduce((a, b) => {
    return a >= b ? a : b;
  })
}



module.exports = Stack;

// const stack = new Stack();
// console.log(stack.push(2)); // 1
// console.log(stack.push(3)); // 2
// console.log(stack.getMax()); // 3
// console.log(stack.push(4)); // 3
// console.log(stack.pop()); // 4
// console.log(stack.getMax()); // 3
// console.log(stack.pop()); // 3

