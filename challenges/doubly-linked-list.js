/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    let prev = this.tail
    this.tail = new Node(val);
    prev.next = this.tail;
    this.tail.prev = prev;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return undefined;
  let curr = this.head;
  let prev = null;
  while (curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }
  if (curr === this.tail) {
    this.tail = prev;
  }
  prev.next = curr.next;
  curr.next.prev = prev;
  curr.prev = null;
  curr.next = null;
  return curr.val;
};

// const l = new LinkedList();
// l.add(1);
// l.add(2);
// l.add(3);
// l.add(4);
// l.remove(3);
// console.log(l.tail.prev);

module.exports = LinkedList;
