/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(array) {
  // body...
  
  this.newArray = array;
  
  this.push = function(){
    return this.newArray.length;
  }

   this.pop = function() {
     let n = this.newArray.length;
     let  newVar = this.newArray[n - 1];     
     n = n - 1;
     return this.newArray[n - 1];
   }
}

var check = new Stack([1, 2, 3, 4, 5]);
console.log(check.push());

console.log(check.pop());
module.exports = Stack;