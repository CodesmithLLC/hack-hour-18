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

function kthToLastNode(k = 0, head) {
  // handling edge cases
  if(arguments.length === 1){
    head = k;
    k = 0;
  }
  if(k === 0) k =1;
  if(head.next === null){
    return undefined;
  }
  // edge cases done
  let pastVals = [];
  let currentNode = head;
  while(currentNode.next != null){
    pastVals.push(currentNode.value)
    currentNode = currentNode.next;
    if(currentNode.next === null){
      pastVals.push(currentNode.value)
    }
  }
  let value;
  if(k > pastVals.length) return undefined;
  for(let i = 0; i < k; i++){
    value = pastVals.pop();
  }
  return value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
