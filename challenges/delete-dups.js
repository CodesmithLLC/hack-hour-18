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
  let cur = head;
  let prev;
  const storage = {};

  while (cur) {
    if (storage[cur.value] === false) {
      storage[cur.value] = true;
      prev = cur;
      cur = cur.next;
    } else if (storage[cur.value] === true) {
      cur = cur.next;
      prev = cur;
    }
  }

  return head;

}

// const newList = new Node(1);
// newList.next = new Node(2);
// newList.next.next = new Node(3);
// newList.next.next.next = new Node(3);

module.exports = deleteDups;
