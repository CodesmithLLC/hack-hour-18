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

function validBST(tree, grandtree, side) {
    if (tree.left !== null) {
        if (tree.left.value >= tree.value ) return false;
        if (side === 'left') {
            if (tree.left.value >= grandtree.value) return false;
        }
        if (side === 'right') {
            if (tree.left.value <= grandtree.value) return false;
        }
    }
    if (tree.right !== null) {
        if (tree.right.value <= tree.value) return false;
        if (side === 'left') {
            if (tree.right.value >= grandtree.value) return false;
        }
        if (side === 'right') {
            if (tree.right.value <= grandtree.value) return false;
        }
    }
    if (tree.left && !tree.right) return validBST(tree.left, tree, 'left');
    if (!tree.left && tree.right) return validBST(tree.right, tree, 'right');
    if (tree.left && tree.right) return validBST(tree.left, tree, 'left') && validBST(tree.right, tree, 'right');
    if (!tree.left && !tree.right) return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
