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
  let curr1 = l1;
  let curr2 = l2;
  let l3;
  let result;
  let carry = 0;
  while (curr1 && curr2) {
    let val = curr1.value + curr2.value + carry;
    carry = 0;
    if (val > 9) {
      carry = Math.floor(val / 10);
      val %= 10;
    }
    if (!result) {
      result = new Node(val);
      l3 = result;
    } else {
      const node = new Node(val);
      l3.next = node;
      l3 = l3.next;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  if (curr1) l3.next = curr1;
  if (curr2) l3.next = curr2;
  if (carry && l3.next) {
    const val = l3.next.value + carry;
    const save = l3.next.next;
    l3.next = new Node(val);
    l3.next.next = save;
  } else if (carry) l3.next = new Node(carry);

  return result;
}

// 1234 + 18 = 204
// 12344 + 183 = 20744
const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
l1.next.next.next = new Node(4);
l1.next.next.next.next = new Node(4);
const l2 = new Node(1);
l2.next = new Node(8);
l2.next.next = new Node(3);
l1
l2
console.log(JSON.stringify(addLinkedList(l1, l2), null, 2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
