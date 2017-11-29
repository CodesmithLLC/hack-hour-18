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
 if(l1.head !== null && l2.head !== null){
   let firstNode = Node(l1.head);
   firstNode.next = Node(l2.head);
   while(l1.head.next !== null && l2.head.next !== null){
     firstNode.next.next = Node(l1.head.next);
     firstNode.next.next.next = Node(l2.head.next);
     firstNode.next.next.next.next = Node(l1.head.next.next);
     firstNode.next.next.next.next.next = Node(l2.head.next.next);
     firstNode.next.next.next.next.next.next = Node(l1.head.next.next.next);
     firstNode.next.next.next.next.next.next.next = Node(l2.head.next.next.next);

   }

 }



};

module.exports = {Node: Node, zip: zip};
