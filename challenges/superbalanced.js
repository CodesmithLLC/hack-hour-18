/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(bt) {
  if (!bt.value) return true;
  
  function getHeight(bt) {
    if (bt === null) return 0;
    return 1 + Math.max(getHeight(bt.left), getHeight(bt.right));
  }
  if (Math.abs(getHeight(bt.left) - getHeight(bt.right)) > 1) return false;
  else return true;
}

// let bt = new BinaryTree(10);
// bt.left = new BinaryTree(5);
// bt.right = new BinaryTree(15);
// bt.left.left = new BinaryTree(2);
// bt.right.right = new BinaryTree(20);
// bt.right.right.right = new BinaryTree(25);
// bt.right.right.right.right = new BinaryTree(30);

// console.log(superbalanced(bt));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
