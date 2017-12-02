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
  this.storage = {}; 
  this.index = 0; 
  this.length = 0; 
}

Stack.prototype.push = function(value) {
	this.storage[this.index] = value; 
	this.index++;
	this.length++;
	return this.length;
}

Stack.prototype.pop = function(value) {
	this.index--;
	const item = this.storage[this.index];
	delete this.storage[this.index];
	this.length--;
	return item;
}


Stack.prototype.getMax = function() {
	const values = Object.values(this.storage);
	const sort = values.sort((a,b) => b - a);
	return sort[0];
}

module.exports = Stack;


var stack = new Stack();
stack.push(0);
stack.push(1);
stack.pop(1);
stack.push(1);
stack.push(100);
stack.push(3);
console.log(stack.push(500))
console.log(stack)
=======
}

module.exports = Stack;
>>>>>>> 0a052b9513b634983a3e1150c5382629aba4ffcc
