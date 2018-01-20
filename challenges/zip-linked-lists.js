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
  let tail = l1, currentl1 = l1.next, currentl2 = l2;
  while (currentl1 || currentl2) {
    if (currentl2) {
      tail.next = new Node(currentl2.value);
      tail = tail.next;
      currentl2 = currentl2.next;
    } 
    if (currentl1) {
      tail.next = new Node(currentl1.value);
      tail = tail.next;
      currentl1 = currentl1.next;
    }
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};
