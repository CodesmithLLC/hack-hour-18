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

// Node constructor for testing: 
// function Node(value) {
//   this.value = value;
//   this.next = null;
// }

function deleteDups(head) {
  const storage = {};
  let prevNode = head;
  let currentNode = prevNode.next;
  while (currentNode) {
    storage[prevNode.value] = prevNode.value;
    if (currentNode.value in storage) {
      prevNode.next = currentNode.next;
      currentNode = prevNode.next;
    }
    else {
      prevNode = prevNode.next;
      currentNode = prevNode.next;
    }
  }
  return head;
}

module.exports = deleteDups;
