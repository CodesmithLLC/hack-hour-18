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
  this.storage = [];
  this.line = [];

  this.enqueue = (el) => {
    let newArr = [];
    this.storage.push(el);
    for (let i=this.storage.length - 1; i >= 0; i--) {
      newArr.push(this.storage[i]);
    }
    this.line = newArr;
  }
  this.dequeue = () => {
    let temp = this.line.pop();
    let newArr = [];
    for (let i=this.line.length - 1; i >= 0; i--) {
      newArr.push(this.line[i]);
    }
    this.storage = newArr;
    return temp;
  }
  this.length = () => this.storage.length;
  this.show = () => this.storage;

}


module.exports = {Stack: Stack, Queue: Queue};
