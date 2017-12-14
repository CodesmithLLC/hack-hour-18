/**
 * Create a stack.Then create a queue using two stacks.
 */


 class Stack {
   constructor() {
     this.stack = []
   }
   push(val) {
     this.stack.push(val)
     return this.stack.length
   }
   pop() {
     return this.stack.pop()
   }
 }

 /**
 * Queue Class
 */


 class Queue {
   constructor() {
     this.front = new Stack()
     this.back = new Stack()
   }
   enqueue(val) {
     return this.front.push(val)
   }
   dequeue() {
     while (this.front.stack.length) {
       this.back.push(this.front.pop())
     }
     const returnValue = this.back.pop()
     while (this.back.stack.length) {
       this.front.push(this.back.pop())
     }
     return returnValue
   }
 }

module.exports = {Stack: Stack, Queue: Queue};
