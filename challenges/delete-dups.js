/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
	let store = []; 
	let curr = head; 
	let prev = head; 
	while (curr) {
		if (store.indexOf(curr.val) === -1) {
			store.push(curr.val)
		}
		else {
			prev.next = curr.next; 
		}
		prev = curr; 
		curr = curr.next; 
	}
	return head;
}

module.exports = deleteDups;
