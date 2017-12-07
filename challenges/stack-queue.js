/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.i = 0;
}

Stack.prototype.push = function(x) {
  this.storage[this.i] = x;
  this.i += 1;
}

Stack.prototype.pop = function(){
  const temp = this.storage[this.i - 1];
  if(this.i > 0) this.i -= 1;
  return temp;
}


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.lengthS1 = 0;
}

Queue.prototype.enqueue = function(x){
  this.stack1.push(x);
  this.lengthS1 += 1;
}

Queue.prototype.dequeue = function() {
  let count = this.lengthS1;

  // move all elements in stack one to stack two except for one element
  while(count > 1 ) {
    this.stack2.push(this.stack1.pop());
    count -= 1;
  }
  
  // pop the one remaining element from stack one to save as return value
  let result = this.stack1.pop();
  this.lengthS1 -= 1;

  // move stack two back to stack one
  while(count <= this.lengthS1 ) { 
    this.stack1.push(this.stack2.pop());
    count += 1;
  }
  
  return result;
}

module.exports = {Stack: Stack, Queue: Queue};

// testing for Stack
const stack = new Stack();
stack.push(5);
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 5
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.pop()); // undefined

// testing for Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // undefined
queue.enqueue(1);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // undefined