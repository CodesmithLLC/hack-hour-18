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
  const store = {};
  if (head) store[head.value] = head.value;
  let current = head;

  while (current.next) {
    if (!store[current.next.value]) {
      store[current.next.value] = 1;
      console.log('hit ', store)
    }
    else {
      console.log('else hit', current);
      current.next = current.next.next;
    }
    if (current.next) current = current.next;
  }
}
// const node = new Node(1);
// node.next = new Node(2);
// node.next.next = new Node(3);
// node.next.next.next = new Node(3);
// node.next.next.next.next = new Node(3);
//
// deleteDups(node);
// console.log(node);
// console.log(node.next);

module.exports = deleteDups;
