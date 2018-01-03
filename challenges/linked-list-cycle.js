/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

const Node = function (value) {
  this.value = value;
  this.next = null;
};

function hasCycle(head) {
  let slow;
  let fast;

  if (!head || !head.next) return false;

  slow = head;
  fast = head;

  if (fast.next === head) return true;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// function hasCycle(head) {
//   let currentNode = head;
//   const values = [];
//   while (currentNode.next) {
//     console.log(currentNode);
//     if (values.includes(currentNode.value)) return true;
//     values.push(currentNode.value);
//     currentNode = currentNode.next;
//   }
//   console.log(values);
//   return false;
// }

const node1 = new Node('1');
const node2 = (node1.next = new Node('2'));
const node3 = (node2.next = new Node('3'));
const node4 = (node3.next = new Node('4'));
const node5 = (node4.next = new Node('5'));

// console.log(hasCycle(node1)); // => false

node5.next = node2;
hasCycle(node1); // => true

module.exports = { Node, hasCycle };
