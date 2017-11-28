/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  if (current1 && current2.next) {
    current1.next = current2.next;
  }
  if (current2 && current1.next) {
    current2.next = current1.next;
  }
  if (current1.next && current2.next) zip(current1.next, current2.next);
};

module.exports = {Node: Node, zip: zip};
