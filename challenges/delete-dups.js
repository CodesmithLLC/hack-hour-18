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
  if (!head || !head.next) return;

  let currentNode;
  let nextNode;
  const nodes = {};

  currentNode = head;
  nextNode = head.next;
  nodes[currentNode.data] = true;

  while (nextNode) {
    const data = nextNode.data;
    if (nodes[data]) {
      currentNode.next = nextNode.next;
    } else {
      nodes[data] = true;
      currentNode = nextNode;
    }
    nextNode = nextNode.next;
  }
}

module.exports = deleteDups;
