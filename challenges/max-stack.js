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
  //let stack = [];
 this.stack = [];
  
 this.push = function (v){
   this.stack.push(v); 
   return this.stack.length - 1;
   
 }
 this.pop = function (){
   return this.stack.pop();
   
 }
 this.getMax = function (){
   return this.stack.reduce((acc, elem, index, array) => {
   if(elem > acc) return elem;
   })
 }
=======
>>>>>>> d12e381d8dc0b49e0f88fd9d7bf59cad52c9024b
}

module.exports = Stack;