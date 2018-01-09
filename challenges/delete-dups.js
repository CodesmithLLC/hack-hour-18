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

//1->2->3->2->1->3

function deleteDups(head) {
  let current = head.next, originalHead = head, prev;
  while (current) {//2 
    while (head !== current) {
      if (head.value === current.value) {
        if (head === originalHead) originalHead = head.next;
        else prev.next = head.next;
      } else prev = head;
      head = head.next;
    }
    current = current.next;
    head = originalHead;
  }
  return head;
}

const n1 = new Node(1);
n1.next = new Node(2);
n1.next = new Node(2);
n1.next.next = new Node(3);
n1.next.next.next = new Node(4);
n1.next.next.next.next = new Node(2);
n1.next.next.next.next.next = new Node(1);
n1.next.next.next.next.next.next = new Node(3);

// 4, 2, 1, 3;

deleteDups(n1);

console.log(n1);

module.exports = deleteDups;
