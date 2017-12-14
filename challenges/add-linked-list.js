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
  let a = l1.value;
  let b = l2.value;
  let remainderone = (a+b)%10

  if((a+b)>9){
    let l3 = new Node(0);
  }else{
    let l3 = new Node(a+b);
  }

  while(l1.next !== null && l2.next !== null){
    let c = l1.next.value;
    let d = l2.next.value;

    if((c+d)>9){
      l3.next = new Node(l1.next.value + l2.next.value);
    }

  }

  while(l3.next !== null){
    if(l3.value === 0){

    }else{
      l3.next();
    }
  }

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
