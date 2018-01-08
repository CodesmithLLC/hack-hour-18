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

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  let current = head;
  const store = {};
  while (current) {
    if (current.next) {
      if (!store[current.next.value]) store[current.next.value] = 1;
      else current.next = current.next.next;
    }
    current = current.next;
  }
}
// const node = new Node(1);
// node.next = new Node(2);
// node.next.next = new Node(3);
// node.next.next.next = new Node(3);
//
// deleteDups(node);
// console.log(node);

module.exports = deleteDups;
