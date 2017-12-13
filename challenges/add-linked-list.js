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
  const outputNode = new Node();
  let current = outputNode;
  let carryOne = false;
  let val;
  while (l1 || l2) {
    if (!l1) val = carryOne ? l2.value + 1 : l2.value;
    else if (!l2) val = carryOne ? l1.value : l1.value;
    val = carryOne ? l1.value + l2.value + 1 : l1.value + l2.value;
    carryOne = false;
    if (val > 9) {
      val = val.toString().slice(val.toString().length - 1);
      carryOne = true; //factor for carryOne
    }
    current.value = val;
    l1 = l1.next;
    l2 = l2.next;
    if (l1 || l2) {
      current.next = new Node();
      current = current.next;
    }
  }
  return outputNode;
}


const node1 = new Node(2)
node1.next = new Node(1)
node1.next.next = new Node(5)

const node2 = new Node(5)
node2.next = new Node(9)
node2.next.next = new Node(2)

console.log(addLinkedList(node1, node2))

module.exports = {Node: Node, addLinkedList: addLinkedList};
