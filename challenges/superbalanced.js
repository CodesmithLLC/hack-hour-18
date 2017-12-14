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

function superbalanced(tree) {
  if (!tree || (tree.left === null && tree.right === null)) return true;

  function height(tre) {
    if (!tre) return 0;
    if (!tre.left && !tre.right) return 1;
    // console.log(tre);
    const subHeight = Math.max(
      tre.left ? height(tre.left) : 0,
      tre.right ? height(tre.right) : 0
    )
    return 1 + subHeight;
  } 

  if (Math.abs(height(tree.left) - height(tree.right)) <= 1) {
    return true && superbalanced(tree.left) && superbalanced(tree.right);
  } else {
    return false;
  }

}

let test = new BinaryTree(10);
test.left = new BinaryTree(5);
// test.right = new BinaryTree(7);
// test.right.right = new BinaryTree(9);
test.left.left = new BinaryTree(3);
// test.left.left.left = new BinaryTree(1);

// console.log(test.left.left);
console.log(superbalanced(test));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
