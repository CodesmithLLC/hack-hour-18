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

var Node = function(value) {
  this.value = value;
  this.next = null;
}

// linear time but nodes are mutated UGH, not passing challenge 3,
// as well as increased memory (challenge 2)
// function hasCycle(head) {
//   let current = head;
//   while (current) {
//     if (current.passed) return true;
//     current.passed = 1;
//     current = current.next;
//   }
//   return false;
// }

// Floyd's Tortoise and Hare solution. Idea is that the hare moves faster than the tortoise
// so the hare will eventrally catch up to the tortoise if it is a circle
function hasCycle(head) {
  if (!head) return false;
  let tortoise = head;
  let hare = head.next;
  while (tortoise && hare) {
    if (tortoise === hare) return true;
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  return false;
}

module.exports = {Node: Node, hasCycle: hasCycle}

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
console.log(hasCycle(node1)); // => false
node5.next = node2;
console.log(hasCycle(node1)); // => true
console.log(hasCycle()); // => false
