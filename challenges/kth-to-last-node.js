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
  let nextNode = head.next; // b
  let counter = 0; // a = 1, b = 2
  const store = [];
  
  while(nextNode) {
    counter++; // determine length of list  
    nextNode = nextNode.next;
    store.push(nextNode);
  }

  const kth = (counter - k) - 1; // get index of k from the beginning of the list

  if(k <= 0 || k > counter) return; // return undefined for 0, negative or numbers larger than the list

  return store[kth].value; // breaks for 4, 5
}

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

 console.log(kthToLastNode(2, a)); // -> returns 'D' (the value on the second to last node)
 
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
