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


// approach: while loop through linkedList and store each value in object/set.
// if repeated value, then reassign links in list to remove node
function deleteDups(head) {
  let current = head;
  const store = {};
  let beforeNodeTemp;
  while (current) {
    if (current.value in store) {
      beforeNodeTemp.next = current.next;
    } else {
      store[current.value] = 0;
      beforeNodeTemp = current;
    }
    current = current.next;
  }
}

module.exports = deleteDups;


function LinkedList(value) {
  this.value = value;
  this.next = null;
}

const a = new LinkedList(1);
const b = new LinkedList(2);
const c = new LinkedList(3);
const d = new LinkedList(3);

a.next = b;
b.next = c;
c.next = d;

deleteDups(a);
console.log(JSON.stringify(a));
