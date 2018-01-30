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
  if (!head) return undefined;
  const cache = {};
  let curr = head;
  let prev = null;
  while (curr.next) {
    if (!cache[curr.value]) {
      cache[curr.value] = true; 
      prev = curr;
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
  }
  return head;
}

/**
 * Tests below!
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

const n = new Node(1);
n.next = new Node(2);
n.next.next = new Node(2);
n.next.next.next = new Node(3);
console.log(n);
console.log(deleteDups(n));

module.exports = deleteDups;
