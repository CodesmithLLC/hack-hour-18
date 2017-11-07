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

  let totalnodes;

  if(head){
  totalnodes = 1;
  }else{
    return undefined;
  }

  let stepsforward = 0;
  let selectednode = head;
  let returnnode = head;

  while(selectednode.next!==null){
          totalnodes++;
          selectednode = selectednode.next;
       }

  stepsforward = totalnodes - k;
  
  if(stepsforward>totalnodes){
    return "error invalid k value, too many steps back";
  }

  for(let i=1;i<=stepsforward;i++){
    returnnode = returnnode.next;
  }

return returnnode.value;

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
