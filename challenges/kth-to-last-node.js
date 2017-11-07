/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (k < 1) throw new Error('Invalid k value');
  const values = [];
  let cur = head;
  while (cur) {
    values.push(cur.value);
    cur = cur.next;
  }
  return values[values.length - k];
}

const a = new Node('A');
console.assert(kthToLastNode(1, a) === 'A');
console.assert(kthToLastNode(2, a) === undefined);
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log('starting tests');
console.assert(kthToLastNode(1, a) === 'E');
console.assert(kthToLastNode(2, a) === 'D');

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
