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
  let value;
  let temp1 = l1;
  let temp2 = l2;
  let remainder = 0;
  let output;
  let currNode;

  while(temp1) { // assuming lists are same length
    let value1 = temp1.value;
    let value2 = temp2.value;

    let total = value1 + value2 + remainder;
    remainder =  total > 9 ? 1 : 0;
    if (remainder === 1) total -= 10;

    if (output === undefined) { // first time create node on ouput
      output = new Node(total);
      currNode = output;
    }
    else {
      currNode.next = new Node(total);
      currNode = currNode.next;
    }
    
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  return output; 
}

module.exports = {Node: Node, addLinkedList: addLinkedList};


let l1 = new Node(2)
l1.next = new Node(1)
l1.next.next = new Node(5)

let l2 = new Node(5)
l2.next = new Node(9)
l2.next.next = new Node(2)

console.log(JSON.stringify(addLinkedList(l1, l2)));

