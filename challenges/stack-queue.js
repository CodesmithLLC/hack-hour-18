/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.array = [];
    this.pop = function(){
        return this.array.pop();
    }
    this.push = function(element){
        this.array.push(element)
    }
}


/**
* Queue Class
*/


function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.enqueue = function(element){
        while (this.stack1.array.length !== 0) this.stack2.push(this.stack1.pop())
        this.stack1.push(element);
        while (this.stack2.array.length !== 0) this.stack1.push(this.stack2.pop())        
    }
    this.dequeue = function(element){
        if (this.stack1.array.length === 0) return undefined;
        return this.stack1.pop();
    }
}


module.exports = {Stack: Stack, Queue: Queue};
