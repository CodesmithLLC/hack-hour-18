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
  const head = l1;
  let cur = head;
  let cur1 = l1.next;
  let cur2 = l2;
  while (cur1 && cur2) {
    cur.next = cur2;
    cur2 = cur2.next;
    cur = cur.next;
    cur.next = cur1;
    cur1 = cur1.next;
    cur = cur.next;
  }
  if (cur1) {
    cur.next = cur1;
  }
  if (cur2) {
    cur.next = cur2;
  }
  return head;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const na = new Node('a');
const nb = new Node('b');

n1.next = n2;
n2.next = n3;
n3.next = n4
n4.next = n5;

na.next = nb;

console.dir(zip(na, n1));

module.exports = {Node: Node, zip: zip};
