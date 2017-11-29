/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = [];
  this.sortedStorage = [];
  this.push = (x) => {
    this.sortedStorage[this.sortedStorage.length] = x;
    this.sortedStorage.sort((a, b) => b - a);
    this.storage[this.storage.length] = x;
    return this.storage.length;
  }

  this.pop = () => {
    let temp = this.storage[this.storage.length - 1];
    delete this.sortedStorage[this.sortedStorage.indexOf(temp)];
    this.sortedStorage.sort((a, b) => b - a);
    this.storage.length--;
    return temp;
  }
  
  this.getMax = () => {
    return this.sortedStorage[0];
  }
  
}

// const stack = new Stack();

// console.log(stack.push(1));
// stack.push(0);
// stack.push(9);
// stack.push(80);
// console.log(stack.getMax());
// stack.pop();
// console.log(stack.getMax());

// console.log(stack);

module.exports = Stack;