// https://www.nczonline.net/blog/2009/04/21/computer-science-in-javascript-doubly-linked-lists/

/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.length = 0;
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
LinkedList.prototype.add = function (val) {
  // new node with value
  let node = new Node(val);

  // if no items in list
  if (this.length === 0) {
    this.head = node;
    this.tail = node;
  } else {
    // attach node to tail
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {

};

module.exports = LinkedList;

const myList = new LinkedList();
myList.add(3);
myList.add(2);
myList.add(5);
// console.log(JSON.stringify(myList, null, 2));
console.log(myList);

