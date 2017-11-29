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

Stack.prototype.push = function(val){
  this.storage[this.index] = val;
  this.index++;
  return this.index;
}

Stack.prototype.pop = function(){
  if(this.index === 0) return undefined;
  this.index--;  
  let removed = this.storage[this.index]
  delete this.storage[this.index];
  return removed;
}

Stack.prototype.getMax = function(){
  if(this.index === 0) return undefined;
  let max = -Infinity;
  for(let i = 0; i<this.index; i++){
    if(this.storage[i] > max){
      max = this.storage[i];
    }
  }
  return max;
}

module.exports = Stack;