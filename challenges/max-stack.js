/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let body = new Array(methods);
  return body;
}

Stack.pop = push: function(ele){
  this[this.length] = ele;
};

let methods = {
  push: function(ele){
    this[this.length] = ele;
  },
  pop: function() {
   let popped = this[this.length-1];
   this.length = this.length -1;
   return popped;
  },
  getMax: function() {
   return Math.max(this);
  }
}

module.exports = Stack;