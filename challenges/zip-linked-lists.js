/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

const LinkedList = require('linkedlist');
const list = new LinkedList();

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1.head && !l2.head) return undefined;

  let current;
  let left = true;

  // Initialize starting position
  if (l1.head) {
    current = l1.head;
  } else {
    current = l2.head;
    left = false;
  }

  // Loop over both lists and alternate
  while (l1.next || l2.next) {
    list.push(current);
    left = !left;

    if (left && l1.next) {
      current = l1.next;
    } else if (!left && l2.next) {
      current = l2.next;
    } else {
      left = !left;
    }
  }
  
  return list;
};

module.exports = {Node: Node, zip: zip};
