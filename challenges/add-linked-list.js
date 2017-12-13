/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let addition = 0;
  const result = new Node(l1.value + l2.value);
  let currentResult = result;
  let currentL1 = l1;
  let currentL2 = l2;
  if (currentResult.value > 9) {
    addition = Number(currentResult.value.toString()[0]);
    currentResult.value = Number(currentResult.value.toString()[1]);
  }
  while (currentL1.next && currentL2.next) {
    currentResult.next = new Node(currentL1.next.value + currentL2.next.value + addition);
    addition = 0;
    if (currentResult.next.value > 9) {
      addition = Number(currentResult.next.value.toString()[0]);
      currentResult.next.value = Number(currentResult.next.value.toString()[1]);
    }
    currentResult = currentResult.next;
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }
  if (addition > 0) {
    currentResult.next = new Node(addition);
  }
  return result;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
