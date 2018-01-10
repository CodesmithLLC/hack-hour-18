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
  const data = {};
  let current = head;
  let prev;

  while (current) {
    if (current.value in data) {
      prev.next = current.next;
      current = current.next;
    } else {
      data[current.value] = true;
      prev = current;
    }
  }
}

module.exports = deleteDups;
