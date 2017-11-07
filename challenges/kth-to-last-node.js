/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function LinkedList(){ ////create linked list
//so create node function with head and tail properties
	this.head = null;
	this.tail = null;
}

function Node(val) {
	this.value = val;
	this.next = null;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

LinkedList.prototype.kthToLastNode = function (k, head) {
	let kthToLast = head;
	let end = head;

	for (let i=0; i<k-1;i++){ //start 'end' off further down the list
		end = end.next;
	}

	while(end.next){ //loop till 'end' is at end, and 'kthToLast' is at k
		kthToLast = kthToLast.next; //starts off at 0/head, goes till k
		end = end.next; //starts off at k, goes till end
	}

	return kthToLast.value; //return value in node

}

////////////////////////////////////////////////////////////////////////////////////////////////////////

LinkedList.prototype.push = function(value) {
	if (this.head === null){ //if no nodes in the list yet
		this.head = new Node(value);
	} else { //if there are existing nodes in the list 
		let item = this.head; //item signifies the current node we're looking at
		
		while (item.next){
			item = item.next; //gets us to the next node
		} 

		const newItem = new Node(value);
		this.tail = newItem;
		item.next = newItem;
	}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

// let LL1 = new LinkedList();
// LL1.push(1);
// LL1.push(2);
// LL1.push(3);
// LL1.push(4);
// LL1.push(5);
// LL1.push(6);
// LL1.push(7);
// LL1.push(8);
// LL1.push(9);
// LL1.push(10);

// console.log(LL1.kthToLastNode(2, LL1.head))
// in this case, output is 9

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
