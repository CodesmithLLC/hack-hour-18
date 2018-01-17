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
  let node = new Node(val);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else if (this.tail === this.head) {
    // console.log('head === tail');
    let cur = this.head;
    cur.next = node;
    this.tail = node;
    this.tail.prev = cur;
  } else {
    let newPrev = this.tail;
    this.tail = node;
    node.prev = newPrev;
    newPrev.next = this.tail;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let cur = this.head;

  while (cur) {
    if (cur.val === val) {
      let prev = cur.prev;
      if (cur.prev) {
        cur.prev.next = cur.next;
      }
      if (cur.next) {
        cur.next.prev = prev;
      }
      return cur.val;
    }
    cur = cur.next;
  }
  return undefined;
};
let newLL = new LinkedList();
newLL.add(1);
// newLL.add(2);
// newLL.add(3);
newLL.remove(1);
// newLL.add(4);
console.log(newLL);
// console.log(newLL.head.next.val)

module.exports = LinkedList;
