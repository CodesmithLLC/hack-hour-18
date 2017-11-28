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

// how do you do this without a LinkedList wrapper with head and tail properties?

// take a node from one list, then a node from the other list, then the next node, etc.
// only one loop needed, take the index from the iterator
// FIND the node at that index in FIRST list and CREATE/ADD, then
// FIND the node at that index in the SECOND list and CREATE/ADD

function zip(l1, l2) {
	let longerList;
	if (l1.length > l2.length){
		longerList = l1.length;
	} else {
		longerList = l2.length;
	}

	for (let i = 0; i<longerList; i++){
		// new Item = new Node(val)
		// this.tail = newItem
		// item.next = newItem
	}
};


module.exports = {Node: Node, zip: zip};
