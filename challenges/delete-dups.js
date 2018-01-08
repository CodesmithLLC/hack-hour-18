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
  let current = head;
  const cache = [];
  while (current) {
    cache.push(current.value);
    while (current.next && cache.includes(current.next.value)) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// const node = new Node(1);
// node.next = new Node(2);
// node.next.next = new Node(3);
// node.next.next.next = new Node(3);
// node.next.next.next.next = new Node(3);
// node.next.next.next.next.next = new Node(3);
// console.log(JSON.stringify(node));

// console.log(JSON.stringify(deleteDups(node)));

module.exports = deleteDups;
