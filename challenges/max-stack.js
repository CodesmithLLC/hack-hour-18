/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.length = 0;
  this.max = -Infinity;

  this.push = (el) => {
    this.storage[this.length] = el;
    this.length += 1;
    if (el > this.max) {
      this.max = el;
    }
    return this.length;
  };

  this.pop = (el) => {
    const tmp = this.storage[this.length - 1];
    this.storage[this.length - 1] = undefined;
    this.length--;
    if (tmp === this.max) {
      for (let i=0; i < this.length; i++) {
        if (this.storage[i] > this.max) {
          this.max = this.storage[i];
        }
      }
    }
    return tmp;
  };

  this.getMax = () => {
    return this.max;
  };
}


module.exports = Stack;