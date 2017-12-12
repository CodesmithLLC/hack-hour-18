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
	if (tree.this.value == null) return true;
	//return false if the max of the left is > than 
	//return false if the min of the right is <= than 
	//return false if the left or right are not a bst 
	//passing all that is a bst
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
