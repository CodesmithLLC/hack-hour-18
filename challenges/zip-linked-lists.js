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
  //Check for valid data, if null is found respond accordingly
  if(l1.value === null && l2.value === null) return null;
  if(l1.value === null) return l2;
  if(l2.value === null) return l1;

  //Container for LinkedList;
  let l3 = [];
  
  //Tracker for LinkedList 0 === l1, 1 === l2
  let tracker = 0;

  //Construct new LinkedList
  while(l1.next !== null && l2.next !== null){
    if(l3.length === 0){
      l3[0] = {};
    } else if(tracker === 0){
      
    }
  }

};

module.exports = {Node: Node, zip: zip};
