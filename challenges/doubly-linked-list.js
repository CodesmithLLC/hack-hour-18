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

  if (!this.head) {
    this.head = this.tail = node;
  } else {
    let current = this.tail;
    this.tail = node;
    this.tail.prev = current;
    current.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;

  while (current && current.val !== val) {
    current = current.next
  }

  if (current) {
    if (current === this.head) {
      current.next.prev = null;
      this.head = current.next;
    } else {
      current.prev.next = current.next;
      if (current.next) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
      }
    }
  }
};

module.exports = LinkedList;
