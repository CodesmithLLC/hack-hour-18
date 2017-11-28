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
  let curr1 = l1;
  let curr2 = l2;
  let temp1 = curr1.next;
  let temp2 = curr2.next;
  while (curr1 && curr2) {
    curr1.next = curr2;
    curr2.next = temp1;

    temp1 = curr1.next;
    temp2 = curr2.next;

    curr1 = temp2.next;
    curr2 = temp1.next;
  }
  return curr1;
}

// 1 2 3 4 5 6

const ll1 = new Node(1);
ll1.next = new Node(3);
ll1.next.next = new Node(5);
const ll2 = new Node(2);
ll2.next = new Node(4);
ll2.next.next = new Node(6);

console.log(zip(ll1, ll2));
// console.log(ll1);
// console.log(ll2);

module.exports = {Node: Node, zip: zip};
