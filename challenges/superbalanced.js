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

// need to find longest branch on the left and right subtree of the top tree, and compare them
// need to make sure that their diff in heights is not more than one
function superbalanced(tree) {

  function maxDepth(t) {
    if (t === null) return 0;
    
    lDepth = maxDepth(t.left);
    rDepth = maxDepth(t.right);

    return Math.max(lDepth, rDepth) + 1;
  }

  const diffHeights = Math.abs(maxDepth(tree.left) - maxDepth(tree.right));
  return diffHeights > 1 ? false: true;
}




module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};


const one = new BinaryTree(5);
one.left = new BinaryTree(5);
one.right = new BinaryTree(5);
one.left.left = new BinaryTree(5);
one.right.right = new BinaryTree(5);
one.right.right.right = new BinaryTree(5);
one.left.left.left = new BinaryTree(5);
one.right.right.right.right = new BinaryTree(5);
one.left.left.left.right = new BinaryTree(5);
one.left.left.left.right.left = new BinaryTree(5);
one.left.left.left.right.left.right = new BinaryTree(5);
one.left.left.left.right.left.right.left = new BinaryTree(5);
one.right.right.right.right.right = new BinaryTree(5);

console.log(superbalanced(one));

// const queue = [];

//   // tranverses the tree by breadth first (as opposed to in-order or postorder)
//   // use a queue for breadth first traversal
//   function traverse(tree) {
//     if (!tree.value) return;
//     let queue = [tree];
//     while(queue.length) {
//       let firstEnqueue = queue[0];
//       if (firstEnqueue.left) {
//         queue.push(firstEnqueue.left);
//       }
//       if (firstEnqueue.right) {
//         queue.push(firstEnqueue.right);
//       }
//       queue.shift();
//     }

//   }