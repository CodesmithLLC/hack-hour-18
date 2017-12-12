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
  let failtest = 0;

  while(tree.left !== null && tree.right !== null){
    if(tree.left.value > tree.value || tree.right.value < tree.value){
      failtest++;
    }else{
      if (failtest !== 0){
      return false;
      }else{
        validBST(tree.left);
        validBST(tree.right);
      } 
    }
  }

   if(this.left === null || this.right === null && failtest === 0){
      return true;
  }

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
