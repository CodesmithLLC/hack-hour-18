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
<<<<<<< HEAD
  const heights = [];
  recur = (tree, height=0) => {
    if (tree.left) {
      let newHeight = height;
      recur(tree.left, ++newHeight);
    }
    if (tree.right) {
      let newHeight = height;
      recur(tree.right, ++newHeight);
    }
    if (!tree.left || !tree.right) heights.push(height);
  }
  recur(tree);
  heights.sort((a, b) => a - b);
  return (heights[heights.length - 1] - heights[0] >= 2) ? false : true;
}


// const bst = new BinaryTree(5);
// bst.left = new BinaryTree(2);
// bst.left.left = new BinaryTree(1);
// bst.left.right = new BinaryTree(3);
// bst.right = new BinaryTree(9);
// bst.right.right = new BinaryTree(11);
// bst.right.left = new BinaryTree(8);

// console.log(superbalanced(bst))

// console.log(bst);

=======

}
>>>>>>> 6c037cd60bfc2b5c27802e8ff553981b105cbd2d

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
