/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function FixedQueue(length) {
//   this.storage = {};
//   this.firstIndex = 0;
//   this.lastIndex = 0;
// }

// FixedQueue.prototype.push = function(val) {
//   this.storage[this.lastIndex++] = val;
//   if (this)
// }

// FixedQueue.prototype.shift = function() {
//   return this.storage[this.firstIndex--];
// }

function kthToLastNode(k, head) {
  /*********************************************************************************
  *  O(n^2) Solution -- Loop through twice -- Works
  **********************************************************************************/
  // let length = 0;
  // let index = 0;
  // let current = head;

  // while (current) {
  //   length++;
  //   current = current.next;
  // }

  // let target = length - k;
  // current = head;

  // while (index < target) {
  //   index++
  //   current = current.next;
  // }
  // return current.value;

  /*********************************************************************************
  *  O(n) Solution? -- hold on to previous k values and return the oldest one?
  *  Depends on time complexity of array operations? -- Works
  **********************************************************************************/
  const storage = [];
  let current = head;

  while (current) {
    storage.push(current);
    if (storage.length > k) storage.shift();
    current = current.next;
  }
  return storage[0].value;

  /*********************************************************************************
  *  TODO:
  *  Make a data structure that automatically maintains a fixed length
  *  without unsing array methods that loop/reindex
  *  (Fixed length queue?)
  **********************************************************************************/
  // const storage = new FixedQueue(k);
  // let current = head;

  // while (current) {
  //   storage.push(current);
  //   if (storage.length > k) storage.shift();
  //   current = current.next;
  // }
  // return storage.shift();
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
