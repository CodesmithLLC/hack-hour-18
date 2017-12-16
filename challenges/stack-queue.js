/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.count = 0;
    this.storage = {};
}

Stack.prototype.push = function(data) {
    // increases the size of storage
    let count = this.count++;

    // assigns size as a key of storage
    // assigns data as the value of key
    this.storage[count] = data;
};

Stack.prototype.pop = function() {
    var count = this.count, deletedData;

    if(size){
    deletedData = this.storage[count];
    delete this.storage[count];
    this.count--;
    return deletedData;
    }
};



/**
* Queue Class
*/


function Queue() {
    this.oldest = 1;
    this.mostrecent = 1;
    this.storage = {};
}



module.exports = {Stack: Stack, Queue: Queue};
