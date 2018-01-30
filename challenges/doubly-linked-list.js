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
  while (curr && curr.val !== val) {
    curr = curr.next;
  }
  if (curr) {
    // Catch head and tail edge cases
    if (curr === this.head) this.head = curr.next;
    if (curr === this.tail) this.tail = curr.prev;
    
    if (curr.prev && curr.next) {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }
    else if (curr.next) curr.next.prev = null;
    else if (curr.prev) curr.prev.next = null;

    // Dereference current node
    curr.prev = null;
    curr.next = null;
  }
};

// const l = new LinkedList();
// l.add(1);
// l.add(2);
// l.add(3);
// l.remove(2);
// console.log(l);

module.exports = LinkedList;
