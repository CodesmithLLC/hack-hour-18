/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 class Stack {
   constructor() {
   this.stack = {}
   this.length = 0
   }

   push(input) {
     this.stack[this.length++] = input
     return this.length
   }
   pop() {
     if (!this.length) return 'already empty'
     let value = this.stack[--this.length]
     delete this.stack[this.length]
     return value
   }
   getMax() {
     if (!this.length) return 'stack is empty'
     return Object.values(this.stack).reduce((acc, val) => Math.max(acc, val))
   }
 }

module.exports = Stack;
