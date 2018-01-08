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

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  const array = [];
  let current = head;

  while (current) {
    if (array.includes(current.value)) {
      current.next = current.next.next;
    }
    array.push(current.value);
  }
}

module.exports = deleteDups;
