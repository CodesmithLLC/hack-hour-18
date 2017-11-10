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
<<<<<<< HEAD
  let length = 0;
  let origin = head
  let currentIndex = 0
  let result = head.value

  //Gets the length of the chain
  while (origin !== null) {
    if (origin.value) {
      length++;
      origin = origin.next
    }
  }

  //Edge case: checks if k is bigger the length of the chain
  if (length < k) {return null}
  origin = head

  //finds and returns the specified value
  while (currentIndex !== length - k) {
    currentIndex++
    if (currentIndex === length - k) {
      return origin.next.value
    }
    result = origin.next.value
    origin = origin.next
  }
  return result
=======

>>>>>>> 0f6a8f50172c9a792500c914e92ddb30987ac4e7
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
