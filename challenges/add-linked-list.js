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
  let result;
  let cur1 = l1;
  let cur2 = l2;
  let num1 = '';
  let num2 = '';
  let sum;
  let curAns;

  while (cur1 !== null) {
    num1 = cur1.value + num1;
    cur1 = cur1.next;
  }

  while (cur2 !== null) {
    num2 = cur2.value + num2;
    cur2 = cur2.next;
  }

  sum = parseInt(num1) + parseInt(num2);
  sum = sum + '';

  let firstNode = new Node(parseInt(sum[sum.length - 1]));
  result = firstNode;
  curAns = result;

  for (let i=sum.length - 2; i >= 0; i--) {
    let temp = new Node(parseInt(sum[i]));
    curAns.next = temp;
    curAns = curAns.next;
  }

  return result;
}

// let ll1 = new Node(5);
// ll1.next = new Node(1);
// ll1.next.next = new Node(2);

// let ll2 = new Node(2);
// ll2.next = new Node(9);
// ll2.next.next = new Node(5);

// let tester = addLinkedList(ll1, ll2);

// console.log(tester.value);
// console.log(tester.next.value);
// console.log(tester.next.next.value);
// console.log(tester.value + tester.next.next.value);

module.exports = {Node: Node, addLinkedList: addLinkedList};
