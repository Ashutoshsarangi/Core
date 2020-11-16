// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function getHeight
  this.getHeight = function (root) {
    let leftHeight = 0
    let rightHeight = 0;
    let headLeft = JSON.parse(JSON.stringify(root));
    let hasChildren = (node) => {
      if (!node) {
        return false;
      }
      if (node.left || node.right) {
        return true;
      }
      return false;
    }
    while (headLeft) {
      if (hasChildren(headLeft)) {
        leftHeight++;

      }
      headLeft = headLeft.left ? headLeft.left : headLeft.right;
      // console.log(JSON.stringify(headLeft));
      // if (headLeft.right) {
      //   console.log('Right', headLeft.data);
      //   leftHeight++;
      //   headLeft = headLeft.right;
      // }
    }
    while (root) {
      if (root.right) {
        rightHeight++;
      }
      root = root.right;
    }

    console.log(leftHeight, rightHeight);
    return Math.max(leftHeight - 1, rightHeight - 1);

  }; // End of function getHeight
}; // End of function BinarySearchTree

var tree = new BinarySearchTree();
var root = null;
// var values = [20, 50, 35, 44, 9, 15, 62, 11, 13]
var values = [3, 5, 2, 1, 4, 6, 7];

for (var i = 1; i < values.length; i++) {
  root = tree.insert(root, values[i]);
}

console.log(tree.getHeight(root));