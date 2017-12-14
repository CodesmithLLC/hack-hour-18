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

function superbalanced(tree, depth = 0, cache = []) {
  if (tree.left && tree.right) {
    return superbalanced(tree.left, depth + 1, cache) && superbalanced(tree.right, depth + 1, cache);
  } else if (tree.left) {
    return superbalanced(tree.left, depth + 1, cache);
  } else if (tree.right) {
    return superbalanced(tree.right, depth + 1, cache);
  } else {
    cache.push(depth);
    return cache.every(num => Math.abs(num - depth) <= 1);
  }
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
