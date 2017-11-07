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
  // Set an array of length === k (number of values we'll need to cache)
  const values = Array(k);
  // Start at head and traverse list
  let cur = head;
  while (cur) {
    // Shift all values one to left.
    // Oldest value will be removed, and current will be added (LIFO).
    for (let i = 0; i < k - 1; i += 1) {
      values[i] = values[i + 1];
    }
    values[values.length - 1] = cur.value;
    cur = cur.next;
  }
  // Return oldest value, or undefined if k > length of list
  return values[0];
}

console.log('starting tests');
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


console.assert(kthToLastNode(1, a) === 'E');
console.assert(kthToLastNode(2, a) === 'D');
console.assert(kthToLastNode(3, a) === 'C');
console.assert(kthToLastNode(4, a) === 'B');
console.assert(kthToLastNode(5, a) === 'A');
console.assert(kthToLastNode(6, a) === undefined);

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
