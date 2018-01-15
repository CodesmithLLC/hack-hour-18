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
  const node = new Node(val);
  if (!this.head && !this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current.val !== val) current = current.next;
  if (current === this.head) this.head = current.next;
  else if (current === this.tail) {
    current.prev.next = null;
    this.tail = current.prev;
  }
  else {
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }
};

// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);

// list.remove(3);

// console.log(list);

module.exports = LinkedList;
