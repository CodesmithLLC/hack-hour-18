/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  let maxNumber = -Infinity;
  let maxIndex;
  let array = [];

  this.push = (value) => {
    this.array.push(value);
    if (value > this.maxNumber) {
      this.maxNumber = value;
      this.maxIndex = array.length - 1;
    }
    return array.length;
  }
  this.pop = () => {
    // let tmp = this.array[array.length - 1];
    return this.array.pop();
  }
}

module.exports = Stack;