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
  if (k <= 0) return 'k is too low';
  
  let listLength = 1;
  let currentNode = head;
  const storage = {};

  while (currentNode !== null) {
    storage[listLength] = currentNode.value;
    listLength ++;
    currentNode = currentNode.next;
  }
  
  if (k >= listLength) return 'k is too high';
  
  return storage[listLength - k]
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
