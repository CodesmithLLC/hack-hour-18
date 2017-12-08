/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.push = (el) => this.storage.push(el);
  this.pop = () => this.storage.pop();
  this.length = () => this.storage.length;
  this.show = () => this.storage;
}


/**
* Queue Class
*/


function Queue() {
  this.storage = new Stack();
  this.line = new Stack();

  this.enqueue = (el) => {
    this.storage.push(el);
  }
  this.dequeue = () => {
    if (this.line.length() === 0) {
      while (this.storage.length() > 0) {
        this.line.push(this.storage.pop());
      }
    }
    return this.line.pop();
  }
}
let q = new Queue;
q.enqueue(1);
q.enqueue(4);
q.enqueue(5);
console.log(q.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
