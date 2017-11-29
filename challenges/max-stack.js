/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

Stack.prototype.push = function (data) {
	let size = this.size++
	this.storage[size] = data;
}

Stack.prototype.pop = function () {
	let size = this.size,
	let poppedData;

	poppedData = this.storage[size];

	delete this.storage[size];
	this.size--;

	return poppedData;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Stack() {
	this.size = 0;
	this.storage = [];
}

function MaxStack() {
  this.stack = new Stack();
  this.maxStack = new Stack();
}

MaxStack.prototype.push = function(item) {
	let size = this.size++
	this.storage[size] = data;

	var currentMax = this.maxStack.peek();
	if (!currentMax || item >= currentMax) {  // this >= is crucial
    this.maxStack.push(item);
  }
  
  return this.stack.push(item);
};

MaxStack.prototype.pop = function() {
  var popped = this.stack.pop(); 
  if (this.maxStack.peek() === popped) {
    this.maxStack.pop();
  }
  return popped; // this return not necessary 
};


MaxStack.prototype.getMax = function() {
  return this.maxStack.peek();
}




module.exports = Stack;