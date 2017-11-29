/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  this.head = null;
  this.length = 0;
  this.max = null;
}

Stack.prototype.push = function push(value) {
  if (!this.head) {
    this.head = new Node(value);
  } else {
    const tmp = this.head;
    this.head = new Node(value);
    this.head.next = tmp;
  }
  this.length += 1;
  if (value > this.max) this.max = value;
  return this.length;
};

Stack.prototype.pop = function pop() {
  if (!this.head) return null;
  const removedNode = this.head;
  this.head = this.head.next;
  this.length -= 1;
  if (removedNode.value === this.max) this.max = this.getMaxSearch();
  return removedNode.value;
};

Stack.prototype.getMaxSearch = function getMaxSearch() {
  if (!this.length) return null;
  let max = -Infinity;
  let cur = this.head;
  while (cur) {
    if (cur.value > max) max = cur.value;
    cur = cur.next;
  }
  return max;
};

Stack.prototype.getMax = function getMax() {
  return this.max;
}


// console.log('Running tests');
// // Tests
// const s = new Stack();
//
// console.assert(s.length === 0);
// console.assert(s.push(1) === 1);
// console.assert(s.push(2) === 2);
// console.assert(s.push(3) === 3);
//
// console.assert(s.pop() === 3);
// console.assert(s.pop() === 2);
// console.assert(s.pop() === 1);
// console.assert(s.pop() === null);
// console.assert(s.pop() === null);
//
// // Test max
// const s2 = new Stack();
//
// console.assert(s2.getMax() === null);
// s2.push(0);
// s2.push(10);
// s2.push(-5);
// s2.push(-100);
// console.assert(s2.getMax() === 10);
//
// s2.push(100);
// s2.push(-500);
// console.assert(s2.getMax() === 100);
//
// s2.pop();
// s2.pop();
// s2.pop();
// s2.pop();
// s2.pop();
// console.assert(s2.getMax() === 0);
// s2.pop();
// console.assert(s2.getMax() === null);

module.exports = Stack;
