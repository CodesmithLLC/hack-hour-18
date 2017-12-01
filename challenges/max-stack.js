/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
<<<<<<< HEAD
  stack = [];
  this.index = 0;

  this.push = function(value) {
    stack[stack.length] = value;
    return stack.length;
  }  

  this.pop = function() {
    let deleted = stack[stack.length-1]
    delete stack[stack.length-1]
    return deleted
  }

  this.getMax = function() {
    let maxValue = stack[0]
    for (let i = 1; i < stack.length; i++) {
      if (stack[i] > max) {
        max = stack[i]
      }
    }
    return maxValue
  }
=======
>>>>>>> 0a052b9513b634983a3e1150c5382629aba4ffcc
}

module.exports = Stack;