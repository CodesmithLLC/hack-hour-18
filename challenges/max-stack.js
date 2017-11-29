/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.store = {};
  this.index = 0;
  this.length = 0;
}

Stack.prototype.push = function(el) {
  this.store[this.index] = el;
  this.index += 1;
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function() {
  this.index -= 1;
  this.length -= 1;
  const removed = this.store[this.index];
  delete this.store[this.index];
  return removed;
};

Stack.prototype.getMax = function() {
  const values = Object.values(this.store);
  return values.reduce((greatest, el) => {
    if (el > greatest) greatest = el;
    return greatest;
  });
};

module.exports = Stack;

// const stack = new Stack();
// console.log(stack.push(1));
// console.log(stack.push(5));
// console.log(stack.pop());
// console.log(stack.push(3));
// console.log(stack.getMax());
// console.log(stack.store);
