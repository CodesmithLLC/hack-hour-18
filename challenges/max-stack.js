/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.array = [];
  this.index = 0;
}

Stack.prototype.push = function(el) {
  this.array[index] = el;
  this.index += 1;
  return this.array.length;
};

Stack.prototype.pop = function(el) {
  this.index -= 1;
  return this.array.splice(index, 1);
};

Stack.prototype.getMax = function(el) {
  return array.reduce((greatest, el) => {
    if (el > greatest) acc = el;
    return greatest;
  })
};

module.exports = Stack;
