/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

Stack.prototype.pop = function() {
    if(this.count === 0) {
      return;
    }
    
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

/**
* Queue Class
*/


function Queue() {
  this.count = 0;
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  if (value) {
      this.stack1.storage[this.count] = value;
      this.count++;
  }
}

Queue.prototype.dequeue = function() {
  let result = this.stack1.storage[0];
  for(let i = 1;i < this.stack1.storage.length;i++){
    let count = 0;
    this.stack2.storage[count] = this.stack1.storage[i];
  }
  delete this.stack1.storage[0];
  for(let j = 0;j < this.stack2.storage.length;j++){
    this.stack1.storage[j] = this.stack2.storage[j];
  }
  return result;
}

module.exports = {Stack: Stack, Queue: Queue};
