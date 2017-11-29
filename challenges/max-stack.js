/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.count = 0;
  this.memory = {};
}

Stack.prototype.push = function(val){
  this.memory[this.count] = val;
  this.count++;
  return this.count;
}

Stack.prototype.pop = function(){
  if(this.memory[this.count] === undefined){
    return undefined
  }
  
  this.count--;
  let popped = this.memory[this.count];
  delete this.memory[this.count];
  return popped;
}

Stack.prototype.getMax = function(){
  if(this.memory[this.count] === undefined){
    return undefined
  }

  let madmax = 0;
  for(var key in this.memory){
    if(this.memory[key]>madmax){
      madmax = this.memory[key];
    }
  }
  return madmax;
}

module.exports = Stack;