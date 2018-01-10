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

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(2);
const node4 = new Node(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(node2)
deleteDups(node1)
console.log(node2);

module.exports = deleteDups;
