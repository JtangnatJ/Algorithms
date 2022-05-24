// Given the root of a binary tree, invert the tree, and return its root.

//recursion
var invertTree = function(root) {
    // if the root does not exist then no point running the function
    if (root === null) {
        return root;
    }

    // we switch the left and the right, and call the function itself on the children
        // this will do down each branch and switch all consquent children as well
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

    return root;
};

