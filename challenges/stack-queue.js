/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (num) {
  this.storage[this.index++] = num;
};

Stack.prototype.pop = function (num) {
  const value = this.storage[--this.index];
  delete this.storage[this.index];
  return value;
}

Stack.prototype.isEmpty = function () {
  return this.storage[0] === undefined;
}
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.pop());
// console.log(stack);

/**
* Queue Class
*/

function Queue() {
  this.input = new Stack();
  this.output = new Stack();
}

Queue.prototype.enqueue = function (num) {
  this.input.push(num);
}

Queue.prototype.dequeue = function (num) {
  if (this.output.isEmpty()) {
    while (!this.input.isEmpty()) {
      this.output.push(this.input.pop());
    }
  }
  return this.output.pop();
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue);

module.exports = { Stack: Stack, Queue: Queue };
