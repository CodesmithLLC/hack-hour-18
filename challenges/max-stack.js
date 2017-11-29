/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.storage = {};
    this.maxQueue = [];
    this.length = 0;
  }
  // should return new length of stack
  push(n) {
    this.storage[this.length++] = n;
    this.maxQueue.push(n);
    this.maxQueue.sort((a, b) => a < b);
    // console.log(this.maxQueue);
    return this.length;
  }

  // should return element that was just removed
  pop() {
    const element = this.storage[--this.length];
    delete this.storage[this.length];
    const rmIndex = this.maxQueue.indexOf(element);
    this.maxQueue.splice(rmIndex, 1);
    return element;
  }

  // should return the largest value currently in the stack
  getMax() {
    return this.maxQueue[0];
  }
}

// const st = new Stack();
// console.log(st.push(1));
// console.log(st.push(3));
// console.log(st.push(2));
// console.log(st.push(5));
// console.log(st.push(4));
// console.log('max', st.getMax());
// console.log(st);
// console.log(st.pop());
// console.log(st.pop());
// console.log('max', st.getMax());
// console.log(st);

module.exports = Stack;
