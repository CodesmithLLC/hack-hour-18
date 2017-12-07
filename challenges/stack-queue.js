/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.body = [];

  this.push = (val) => {
    this.body.push(val);
    return this.body.length;
  }

  this.pop = () => {
    return this.body.pop();
  }
}


/**
* Queue Class
*/


function Queue() {
  this.head = new Stack();
  this.tail = new Stack();
  this.length = 0;
  let headIdx = 0;

  this.enqueue = (val) => {
    this.length += 1;
    this.tail.push(val);
    this.head.push(this.tail.body[headIdx]);
    return this.length;
  }

  this.dequeue = () => {
    if (this.length <= 0) return;
    const item = this.head.pop();

    headIdx += 1;
    this.length -= 1;
    this.head.push(this.tail.body[headIdx]);
    return item;
  }
}

module.exports = { Stack: Stack, Queue: Queue };
