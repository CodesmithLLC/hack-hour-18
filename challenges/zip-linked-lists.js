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
  if (l1 === undefined) return l2;
  if (l2 === undefined) return l1;
  let list1 = l1;
  let list2 = l2;
  let tmp;
  let turn = 1;

  while (list1 !== null && list2 !== null) {
    if (turn === 1) {
      tmp = list1.next;
      list1.next = list2;
      list1 = tmp;
      turn = 2;
    } else {
      tmp = list2.next;
      list2.next = list1;
      list2 = tmp;
      turn = 1;
    }
  }

};

module.exports = {Node: Node, zip: zip};
