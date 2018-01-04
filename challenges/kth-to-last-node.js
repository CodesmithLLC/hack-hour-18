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
  let length = 0;
  let origin = head;
  let currentIndex = 0;

  //Gets the length of the chain
  while (origin !== null) {
      length++;
      origin = origin.next;
  }

  //Edge case: checks if k is bigger the length of the chain
  if (length < k) return undefined; 
  origin = head;

  //finds and returns the specified value
  while (currentIndex !== length - k) {
    currentIndex++;
    origin = origin.next;
  }
  return origin.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
