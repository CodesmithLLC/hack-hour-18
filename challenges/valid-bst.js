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
  //if left and right exist
  console.log('current tree is: ', tree.value)
  if (tree.left) {
    if (tree.left.value > tree.value) return false;
    if (validBST(tree.left) === false) return false;
  }
  if (tree.right) {
    if (tree.right.value < tree.value) return false;
    if (validBST(tree.right) === false) return false;
  }
  return true;
}

const myTree = new BinaryTree(10);
myTree.left = new BinaryTree(5);
myTree.left.left = new BinaryTree(3);
myTree.left.right = new BinaryTree(6);

myTree.right = new BinaryTree(15);
myTree.right.left = new BinaryTree(12);
myTree.right.right = new BinaryTree(20);

// console.log(myTree)
console.log('validBST is: ', validBST(myTree))
// validBST(myTree)

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
