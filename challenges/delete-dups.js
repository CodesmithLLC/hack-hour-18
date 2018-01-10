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
<<<<<<< HEAD
	let store = []; 
	let curr = head; 
	let prev = head; 
	while (curr) {
		if (store.indexOf(curr.val) === -1) {
			store.push(curr.val);
			prev = curr;
		}
		else {
			prev.next = curr.next; 
		} 
		curr = curr.next; 
	}
	return head;
=======

>>>>>>> 205641324e48c1414ddfaf392a149cb68561b427
}

module.exports = deleteDups;


//solution // Nested loops
// function deleteDups(head) {
//   var inner;
//   for (var outer = head; outer.next; outer = outer.next) {
//     inner = outer;
//     while (inner.next) {
//       if (outer.value === inner.next.value) {
//         inner.next = inner.next.next;
//       } else {
//         inner = inner.next;
//       }
//     }
//   }
// }


// // Hashing/Object
// function deleteDups(head) {
//   var data = {};
//   var prev;
//   for (var curr = head; curr; curr = curr.next) {
//     if (curr.value in data) {
//       prev.next = curr.next;
//     } else {
//       data[curr.value] = true;
//       prev = curr;
//     }
//   }
// }