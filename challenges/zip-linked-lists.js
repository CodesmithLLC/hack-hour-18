/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  console.log(l1);
  console.log(l2);
  var current1 = l1;
  var current2 = l2;
  var temp1, temp2;
  for (let i = 0; i < l1.length; i++) {
    temp1 = current1.next;
    current1.next = current2;
    current1 = temp1;

    temp2 = current2.next    
    current2.next = temp1;
    current2 = temp2;
  }
};


const a1 = new Node('A1');
const b1 = new Node('B1');
const c1 = new Node('C1');
a1.next = b1;
b1.next = c1;


const a2 = new Node('A2');
const b2 = new Node('B2');
const c2 = new Node('C2');
a2.next = b2;
b2.next = c2;


zip(a1, a2);
module.exports = {Node: Node, zip: zip};
