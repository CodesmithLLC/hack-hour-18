/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.storage.push(val);
  this.length++;
  return this.length;
};

Stack.prototype.pop = function() {
  this.length--
  return this.storage.pop();
};


/**
* Queue Class
*/

function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.s1.push(val);
};

Queue.prototype.dequeue = function() {
  if (this.s1.length === 0 && this.s2.length === 0) {
    return undefined;
  }
  else if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
}

const q = new Queue();
q.enqueue('first');
q.enqueue('2nt');
q.enqueue('third');
q.enqueue('4th');
const one = q.dequeue();
const two = q.dequeue();
q.enqueue('fifth');
q.enqueue('6th');
const three = q.dequeue();
const four = q.dequeue();
const five = q.dequeue();
const six = q.dequeue();
console.log(one, two, three, four, five, six);

module.exports = {Stack: Stack, Queue: Queue};
