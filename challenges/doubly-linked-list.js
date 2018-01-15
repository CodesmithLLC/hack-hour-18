/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;

  if (current.value === val) {
    this.head = current.next;
    if (!this.head) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
  } else if (this.tail.value = val) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (current) {
      if (current.value = val) {
        current.prev.next = current.next;
        return;
      }
      current = current.next;
    }
  }
};

module.exports = LinkedList;
