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

<<<<<<< HEAD
var tree = new BinaryTree(6);
tree.add(3);
tree.add(9);

function validBST(tree) {
	if (tree.left === null && tree.right === null) {
		return true;
	}
	if (tree.left.value > tree.value || tree.right.value < tree.value) {
		return false;
	}
	if (tree.left.value === null) {
		return validBST(tree.left)
	}
	if (tree.right.value === null) {
		return validBST(tree.left)
	}
	return validBST(tree.left) && validBST(tree.right);
=======
function validBST(tree) {
>>>>>>> 54281340f4d14531d6717c60180fe8eddd11b887

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
