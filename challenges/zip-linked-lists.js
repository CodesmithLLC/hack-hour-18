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
  let current = l1;
  let second = l2;
  let temp1;
  let temp2;
  let node;

  while (current && second) {
    temp1 = current.next;
    temp2 = second.next;
    node = new Node(current.val);
    node.next = second
    node.next.next = temp1;
    current = node.next.next
    current.next = temp2;
    second = current.next.next;
  }
};

module.exports = {Node: Node, zip: zip};
