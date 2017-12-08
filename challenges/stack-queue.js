/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.size = 0;
	this.storage = {};
}

Stack.prototype.push = function(data){
	var size = ++this.size;
	this.storage[size] = data;
}

Stack.prototype.pop = function(){
	var size = this.size,
	deletedData;

	if (size){
		deletedData = this.storage[size];

		delete this.storage[size];
		this.size--;

		return deletedData;
	}
}

/**
* Queue Class
*/

function Queue() {
	let outputStack = new Stack();
	let inputStack = new Stack(); 

	for (let i=; i)
}

// Queue.prototype.size = function(){
// 	return this.newestIndex - this.oldestIndex;
// }

// Queue.prototype.enqueue = function(){
// 	this.storage[this.newestIndex] = data;
// 	this.newestIndex++;
// }

// Queue.prototype.dequeue = function(){
// 	var oldestIndex = this.oldestIndex,
// 	deletedData = this.storage[oldestIndex];

// 	delete this.storage[oldestIndex];
// 	this.oldestIndex++;

// 	return deletedData;
// }

module.exports = {Stack: Stack, Queue: Queue};
