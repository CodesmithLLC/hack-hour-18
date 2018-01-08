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

let values = [];

function deleteDups(head) {
  if(head.next !== null) {
    if(values.indexOf(head.value) === -1) {
      values.push(head.value);
      return deleteDups(head.next);
    } else {
      head.value = head.next.value;
      return deleteDups(head.next);
    }
  } else {
    return;
  }
}

module.exports = deleteDups;
