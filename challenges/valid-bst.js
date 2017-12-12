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

BinaryTree.prototype.insert = function(val) {
  if (val < this.value && !this.left) {
    this.left = new BinaryTree(val);
  } else if (val > this.value && !this.right) {
    this.right = new BinaryTree(val);
  } else {
    val < this.value ? this.left.insert(val) : this.right.insert(val);
  }
}

const bst = new BinaryTree(3);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(2);

function validBST(tree) {
  console.log(tree.value);
  const val = tree.value;
  if (!tree.left && !tree.right) return true;

  if (tree.left && tree.value > tree.left.value) {
    return validBST(tree.left);
  }
  if (tree.right && tree.value < tree.right.value) {
    return validBST(tree.rigsht);
  }
  return false;
}

console.log(validBST(bst));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
