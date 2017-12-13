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

//1) need the index of the nodes to add on place value
//2) OR need to just join all the numbers
//run through the linked list store items as strings to an array,
//toString the number, then join and parseInt

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let digits1 = [], 
  digits2 = [];
  
  while (l1){
    digits1.push(l1.value.toString());
    l1 = l1.next;
  }
  
  while(l2){
    digits2.push(l2.value.toString());
    l2 = l2.next;
  }
  
  let index1 = digits1.length,
  index2 = digits2.length;
  
  let joined1 = parseInt(digits1.join(""));
  let joined2 = parseInt(digits2.join(""));
  
  return joined1 + joined2;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
