/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
	this.storage = {};
	this.index = 0; 
	this.size = 0; 
}


Stack.prototype.push = function(value) {
	this.storage[this.index] = value; 
	this.index++;
	this.size++;
}

Stack.prototype.pop = function() {
	var output = this.storage[this.index-1];
	delete this.storage[this.index-1];
	this.index--;
	this.size--;
	return output;
}


// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.pop());

/**
* Queue Class
*/


function Queue() {
	this.queue = [];
	this.index = 0; 
	this.size = 0; 
}

Queue.prototype.enqueue = function(value) {
	this.queue[this.index] = value; 
	this.index++;
	this.size++;
}

Queue.prototype.dequeue = function() {
	if (this.size === 0) {return undefined};
	var output = this.queue[0];
	for (let i = 0; i < this.queue.length; i++) {
		if (this.queue[i+1]) {
			this.queue[i] = this.queue[i+1];
		}
	}
	this.queue.splice(this.queue.length-1,1);
	this.index--;
	this.size--;
	return output;
}

// var queue = new Queue();
// queue.enqueue(0);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue)
module.exports = {Stack: Stack, Queue: Queue};









