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
  let nextNode = head;
  let counter = 1;
  let otherCounter = 0;
  while (nextNode.next){
    nextNode = nextNode.next;
    counter++;
  }

  if (k > counter){
    return 'is bigger than the linkedlist' 
  }
  
  nextNode = head;
  while (otherCounter < counter - k){
    nextNode = nextNode.next;
    otherCounter++;
  }
  
  return nextNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
