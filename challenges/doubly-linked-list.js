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
LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val)
    this.tail = this.head
    return;
  }
  this.tail.next = new Node(val)
  this.tail.next.prev = this.tail
  this.tail = this.tail.next
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return;
  let temp = this.head
  while (temp.next) {
    if (temp.val === val) {
      temp.prev.next = temp.next
      temp.next.prev = temp.prev
      break;
    }
    temp = temp.next
  }
  if (!temp.next) temp.prev.next = null
};

module.exports = LinkedList;
