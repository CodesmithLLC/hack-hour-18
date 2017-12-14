

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {

  const diver = (branch, depth = 0) => {
    let leftDepth = 0
    let rightDepth = 0
    if (branch.left) {
      leftDepth = diver(branch.left, depth+1)
    }
    if (branch.right) {
      rightDepth = diver(branch.right, depth+1)
    }
    if (!branch.left && !branch.right) {
      return depth
    }
    return Math.max(leftDepth, rightDepth)
  }
  const depth1 = diver(tree.left)
  const depth2 = diver(tree.right)
  return Math.abs(depth1 - depth2) < 2
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
