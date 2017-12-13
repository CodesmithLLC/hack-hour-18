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
   const l1vals = []
   const l2vals = []
   let temp;

   temp = l1
   l1vals.push(temp.value)
   while (temp.next) {
     l1vals.push(temp.next.value)
     temp = temp.next
   }
   temp = l2
   l2vals.push(temp.value)
   while (temp.next) {
     l2vals.push(temp.next.value)
     temp = temp.next
   }


   let sumListFormat = (parseInt(l1vals.reverse().join('')) + parseInt(l2vals.reverse().join(''))).toString().split('')

   const answer = new Node(sumListFormat.pop())
   temp = answer
   while (sumListFormat.length) {
     temp.next = new Node(sumListFormat.pop())
     temp = temp.next
   }
   return answer
 }

module.exports = {Node: Node, addLinkedList: addLinkedList};
