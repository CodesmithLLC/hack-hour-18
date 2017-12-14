/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

 // A tree is "superbalanced" if the difference between
 // the depths of any two leaf nodes ↴ is no greater than one.

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree, depth = 0, leafCache = []) {
  // console.log(tree.value, depth);
  if (tree.left && tree.right) {
    return superbalanced(tree.left, depth + 1, leafCache) && superbalanced(tree.right, depth + 1, leafCache)
  } else if (tree.left) {
    return superbalanced(tree.left, depth + 1, leafCache)
  } else if (tree.right) {
    return superbalanced(tree.right, depth + 1, leafCache)
  } else {
    leafCache.push(depth)
    return leafCache.every(num => Math.abs(num - depth) <= 1)
  }
}

// const myTree = new BinaryTree(10);
// myTree.left = new BinaryTree(5);
// myTree.left.left = new BinaryTree(3);
// myTree.left.right = new BinaryTree(7);
// myTree.left.right.left = new BinaryTree(6);
// // myTree.left.right.left.right = new BinaryTree(8);
//
// myTree.right = new BinaryTree(15);
// // myTree.right.left = new BinaryTree(12);
// myTree.right.right = new BinaryTree(20);

// console.log(superbalanced(myTree))

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
