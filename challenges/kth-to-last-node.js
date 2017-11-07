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
 //our parameter, k, points to the node at nth position in our linked list;
 //parameter head points to the head node;
  let current = head;
  let counter = 0;
  let results = [];
  while (current) {
    // console.log('test')
    results.push(current);
    current = current.next;
  //  console.log(current);
    counter++;
  }
  if (!results[counter - k]) {
    return undefined;
  }
  return results[counter - k].value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
