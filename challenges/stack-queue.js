/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.values = [];
  this.push = function(value) {
    this.values[this.length] = value;
    return ++this.length;
  };
  this.pop = function() {
    const popped = this.values[this.length - 1];
    this.values.length = this.length - 1;
    this.length--;
    return popped;
  };
  this.length = 0;
}


/**
* Queue Class
*/


function Queue() {
  this.mainStack = new Stack();
  this.tempStack = new Stack();
  this.add = function(value) {
    if (this.length === 0) {
      this.mainStack.push(value);
      return ++this.length;
    } else {
      for (let i = 0; i < this.length; i++) {
        this.tempStack.push(this.mainStack.pop());
      }
      this.mainStack.push(value);
      for (let i = 0; i < this.length; i++) {
        this.mainStack.push(this.tempStack.pop());
      }
    }
    return ++this.length;
  };
  this.remove = function() {
    this.length--;
    return this.mainStack.pop();
  }
  this.values = this.mainStack.values;
  this.length = 0;
}

module.exports = {Stack: Stack, Queue: Queue};