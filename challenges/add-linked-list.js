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
  let remainder = 0, head = null, tail = null;
  while (l1 || l2) {
    let
    val1 = l1 ? l1.value : 0,
    val2 = l2 ? l2.value : 0,
    val = val1 + val2 + remainder;
    remainder = 0;
    if (val > 9) {
      remainder = Number(String(val).split('')[0]);
      val = Number(String(val).split('')[1]);
    }
    const ll = new Node(val);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    if (!head) {
      head = ll;
      tail = ll;
    } else {
      tail.next = ll;
      tail = tail.next;
    }
  }
  if (remainder !== 0) {
    const ll = new Node(remainder);
    tail.next = ll;
    tail = tail.next;
  }
  return head;
}

// const l1 = new Node(9);
// l1.next = new Node(1);
// l1.next.next = new Node(5);

// const l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(9);
// l2.next.next.next = new Node(2);

// console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
