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
  const arr = [];
  function recursive(head) {
    arr.push(head.value);
    if (!head.next) return
    else recursive(head.next);
  }
  recursive(head);
  console.log(arr);
  const uniqueArr = Array.from(new Set(arr));
  const linkedList = new Node(uniqueArr[0]);
  let otherVal = linkedList;
  for (let i = 1; i < uniqueArr.length; i++) {
    otherVal.next = new Node(uniqueArr[i]);
    otherVal = otherVal.next;
  }
  return linkedList;
}

module.exports = deleteDups;
