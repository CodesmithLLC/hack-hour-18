/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place 
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let current1 = l1;
  let current2 = l2;
  let next1 = l1.next;
  let next2 = l2.next;
  let head = l1;

  while (next1 !== null && next2 !== null) {
    current1.next = current2;
    current2.next = next1;
    current1 = next1;
    current2 = next2;
    next1 = next1.next;
    next2 = next2.next;
  }
  return head;
}


// let list1 = new Node(1);
// list1.next = new Node(2);
// list1.next.next = new Node(3);
// list1.next.next.next = new Node(4);

// let list2 = new Node('a');
// list2.next = new Node('b');
// list2.next.next = new Node('c');
// list2.next.next.next = new Node('d');
// list2.next.next.next.next = new Node('e');


// let zippedList = zip(list1, list2);

// let currentNode = zippedList;
// while(currentNode) {
//   console.log(currentNode);
//   currentNode = currentNode.next;
// }
// };

module.exports = {Node: Node, zip: zip};
