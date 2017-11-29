/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(val){
  this.storage[this.index] = val;
  this.index++;
  return this.index;
}

Stack.prototype.pop = function(){
  let removed = this.storage[this.index--]
  let tempStorage = {};   // should be able to do this without a temp, I think..
  for(let i = 0; i < this.index; i++){
    tempStorage[i] = this.storage[i];
  }
  this.storage = tempStorage;
  // this.index--;
  return removed
}

Stack.prototype.getMax = function(){
  let max = -Infinity;
  for(let i = 0; i<this.index; i++){
    if(this.storage[i] > max){
      max = this.storage[i];
    }
  }
  return max;
}

// var stackTest = new Stack();

// stackTest.push(1);
// stackTest.push(2);
// stackTest.pop();
// stackTest.push(3);
// stackTest.push(4);
// stackTest.push(5);

module.exports = Stack;