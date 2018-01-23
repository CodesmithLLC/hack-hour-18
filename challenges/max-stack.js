/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.max = -Infinity;
  this.length = 0;
  this.push = item => {
    this.stack[this.stack.length] = item;
    if (item > this.max) this.max = item;
    return ++this.length;
  };
  this.pop = () => {
    const popped = this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;
    this.length--;
    if (this.max === popped) {
      this.max = -Infinity;
      this.stack.forEach(num => {
        if (num > this.max) this.max = num
      });
    }
    return popped;
  };
  this.getMax = () => {
    if (this.stack.length === 0) return undefined;
    return this.max;
  };
}

module.exports = Stack;