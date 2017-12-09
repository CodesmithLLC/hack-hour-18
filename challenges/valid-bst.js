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
  const treeArray = [];
  const getValues = (bst) => {
    if (bst.left) getValues(bst.left);
    treeArray.push(bst.value);
    if (bst.right) getValues(bst.right);
  };
  getValues(tree);
  const sortedArray = [...treeArray].sort((a, b) => a - b);
  return (
    treeArray.every((elem, index) => {
        return elem === sortedArray[index];
      })
    );
};

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
