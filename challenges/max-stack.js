/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// const Stack = function() {
//   this.count = 0;
//   this.store = {};
// };

// Stack.prototype.push = function(val) {
//   this.store[this.count] = val;
//   this.count += 1;
//   return this.count;
// };

// Stack.prototype.pop = function() {
//   if (this.count === 0) return undefined;
//   this.count -= 1;
//   const output = this.store[this.count];
//   delete this.store[this.count];
//   return output;
// };

// Stack.prototype.getMax = function() {
//   Math.max(...Object.values(this.store));
// };
// console.log(Stack.prototype.push(1));

function Stack() {
  this.count = 0;
  this.store = {};

  this.push = (val) => {
    this.store[this.count] = val;
    this.count += 1;
    return this.count;
  };

  this.pop = () => {
    if (this.count === 0) return undefined;
    this.count -= 1;
    const output = this.store[this.count];
    delete this.store[this.count];
    return output;
  };

  this.getMax = () => Math.max(...Object.values(this.store));
}

// const test = new Stack();

// console.log(test.push(1));
// console.log(test.push(2));
// console.log(test.push(3));
// console.log(test.store);
// console.log(test.pop());
// console.log(test.store);
// console.log(test.getMax);
module.exports = Stack;
