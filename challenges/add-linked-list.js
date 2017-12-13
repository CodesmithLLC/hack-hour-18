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
  let val1 = l1;
  let val2 = l2;
  let arr = [];
  while (val1 || val2) {
    let value1 = val1 === null ? 0 : val1.value;
    let value2 = val2 === null ? 0 : val2.value;
    arr.push(value1 + value2);
    val1 = val1 ? val1.next : null;
    val2 = val2 ? val2.next : null;
  }
  let newArr = arr;
  // console.log(newArr);
  let ourArr = arr.map((element, i) => {
    if (newArr[i] >= 10) return newArr[i] - 10;
    if (newArr[i - 1] >= 10) return element + 1;
    return element;
  });
  if (newArr[newArr.length-1] >= 10){
    ourArr.push(1);
  };
  let initializeNode = new Node(ourArr[0]);
  let returnNode = initializeNode;
  for (let i = 1; i < ourArr.length; i++) {
    returnNode.next = new Node(ourArr[i]);
    returnNode = returnNode.next;
  }
  return initializeNode;
}

let node1 = new Node(5);
node1.next = new Node(5);
node1.next.next = new Node(5);

let node2 = new Node(5);
node2.next = new Node(2);


console.log(addLinkedList(node1,node2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
