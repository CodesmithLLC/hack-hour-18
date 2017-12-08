/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.push = x => {
    this.storage[this.storage.length] = x;
  }
  this.pop = () => {
    let last = this.storage[this.storage.length - 1];
    this.storage.length = this.storage.length - 1;
    return last;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.enqueue = x => this.stack1.push(x);
  this.dequeue = () => {
    for (let i = this.stack1.storage.length - 1; i >= 0; i--) {
      this.stack2.push(this.stack1.pop());
    }
    let shiftVal = this.stack2.pop();
    for (let i = this.stack2.storage.length - 1; i >= 0; i--) {
      this.stack1.push(this.stack2.pop());
    }
    return shiftVal;
  }
}


module.exports = {Stack: Stack, Queue: Queue};
