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

function validBST(tree, prev=null) {
  if (tree) {
    if (!validBST(tree.left)) return false;
    if (prev && tree.value < prev.value) return false;
    prev = tree;
    return validBST(tree.right, prev);
  }
  return true;
}

// const bst = new BinaryTree(10);
// bst.left = new BinaryTree(9);
// bst.left.left = new BinaryTree(8);
// bst.right = new BinaryTree(11);
// bst.right.right = new BinaryTree(13);
// console.log(bst);
// console.log(validBST(bst));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
