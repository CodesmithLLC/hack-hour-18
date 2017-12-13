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

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
  } else {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }
}

function addLinkedList(l1, l2) {
  const list = new LinkedList();
  let curr1 = l1.head;
  let curr2 = l2.head;
  let carry = 0;

  while (curr1 && curr2) {
    let total = curr1.value + curr2.value + carry;
    if (total < 10) {
      list.add(new Node(total))
      carry = 0;
    } else {
      let currTotal = total - 10;
      carry = 1;
      list.add(new Node(currTotal))
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  while (curr1 || curr2 || carry) {
    let currTotal = curr1.value || curr2.value
    if (carry) {   
      list.add(new Node(currTotal + carry));
      carry = 0;
    } else {
      list.add(currTotal);
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return list;
}

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.add(6);
list1.add(3);
list1.add(6);
list2.add(3);
list2.add(0);
list2.add(9);

console.log(addLinkedList(list1, list2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
