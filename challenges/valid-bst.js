/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  const head = tree;
  let current = head;

  // traverse left side of tree
  while (current.left !== null && current.right !== null) {
    if (current.right.value < current.value || current.left.value > current.value) {
      return false
    }
    current = current.left;
  }

  // return to top of tree
  current = head;

  // traverse right side of tree
  while (current.left !== null && current.right !== null) {
    if (current.right.value < current.value || current.left.value > current.value) {
      return false
    }
    current = current.right;
  }

  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
