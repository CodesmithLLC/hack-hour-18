/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}


/**
* Queue Class
*/

const stack1 = new Stack();
const stack2 = new Stack();

function Queue() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.previous = null;
  this.next = null;
}

Queue.prototype.addToHead(value) {
  const node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.previous = node;
  }
}

module.exports = {Stack: Stack, Queue: Queue};
