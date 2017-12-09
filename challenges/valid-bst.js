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
    if (!this.value) return true;
    if (!this.left.value) {
        if (this.right.value > this.value) {
            return true & validBST(this.right);
        } else {
            return false;
        }
    }
    if (!this.right.value) {
        if (this.left.value < this.value) {
            return true & validBST(this.left);
        } else {
            return false;
        }
    }
    if (this.left.value > this.value) return false;
    if (this.right.value < this.value) return false;
    return true && validBST(this.left) && validBST(this.right);

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
