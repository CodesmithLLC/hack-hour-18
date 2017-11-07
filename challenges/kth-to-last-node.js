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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	var first = head; //assign node A to "first" in the first place. saving it for later. 
	let count = 1; //start counting from the 1st node. 
	while (head.next){
		count++;
		head = head.next; //the new head should now be the last node; 
	}
	if (k > count || k < 0){
		return undefined;
	}
	const last = count; //count is now the total number of nodes. for example, it should now be 5, and it is assigned to "last".
	const order = last - k + 1; //let's say last === 5, and k === 2. The order is now 4. so we want the 4th node on the list. 
	let start = 1; 
	while (start < order){ //the while loop stops when start hits 4. By the time start has hit 4, first should be === D.
		first = first.next;
		start++;
	}
	return first.value; //should return the value of node d --> D;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

//   const a = new Node('A');
//   const b = new Node('B');
//   const c = new Node('C');
//  const d = new Node('D'); 
//  const e = new Node('E');
//   a.next = b;
// b.next = c;
//  c.next = d;
//  d.next = e;

//  console.log(kthToLastNode(6,a)); 
