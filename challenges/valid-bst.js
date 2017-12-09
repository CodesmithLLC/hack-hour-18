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
    debugger;
    let isValidTree = true;
    const recurs = (tree) => {
        let topVal = tree.value;
        if (tree.left !== null) {
            if (tree.left.value > tree.value) isValidTree = false;
            else recurs(tree.left)  
        }
        if (tree.right !== null) {
            if (tree.right.value < tree.value) isValidTree = false;
            else recurs(tree.right)  
        }
    };
    recurs(tree);
    return isValidTree;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

const tree = new BinaryTree(30);
const left1 = new BinaryTree(55);
const right1 = new BinaryTree(37);
const left2 = new BinaryTree(15);
const right2 = new BinaryTree(26);
const left3 = new BinaryTree(31);
const right3 = new BinaryTree(40);


tree.left = left1;
tree.right = right1;
left1.left = left2;
left1.right = right2;
right1.left = left3;
right1.right = right3;


console.log(validBST(tree));
// console.log(tree);

