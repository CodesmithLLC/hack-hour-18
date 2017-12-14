/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

// DEFINITIONS
// A tree is balanced if no leaf is farther away from the root than any other leaf.
// A balanced tree is defined as a tree where the depth of all leaf nodes or nodes
// with single children differ by no more than one.

// SOLUTIONS
// get depth of left and right
// if the difference between left depth and right depth is greater than 1 return false

// get the node with the minimum depth and the node with the maximum depth
// ensure they only differ by 0 or 1

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Separate functions as to not affect time complexity
function minDepth(node) {
  if (typeof node === 'undefined') return 0;
  return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}

function maxDepth(node) {
  if (typeof node === 'undefined') return 0;
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

// max and min traverse each node once. O(n)
function superbalanced(tree) {
  if (typeof tree === 'undefined') return null;
  return maxDepth(tree) - minDepth(tree) <= 1;
}

module.exports = { BinaryTree, superbalanced };
