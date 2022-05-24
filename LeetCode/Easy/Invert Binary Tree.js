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

// depth first
var invertTree = function(root) {
    // DFS uses a stack because we are going DEPTH FIRST
        // we add the children of a node into the stack, then we add the children of the children, taking care of one branch at a time
    const stack = [root]

    while(stack.length) {
        // by using pop, we are looking at one of the deeper branches. the root is at the beginning of the stack
        let temp = stack.pop();

        if (temp !== null) {
            // remember to switch lefts and rights
            [temp.left, temp.right] = [temp.right, temp.left];
            // add the children into the queue
            stack.push(temp.left, temp.right)
        }
    }

    return root;
};

// breadth first
var invertTree = function(root) {
    // in BFS we use a queue rather than a stack
        // we want to take care of each layer at a time before diving any deeper
    const queue = [root];

    while (queue.length) {
        // we take from the front of the queue because we want to do each level at a time
        let temp = queue.shift();

        if (temp !== null) {
            // remember to switch left and right
            [temp.left, temp.right] = [temp.right, temp.left];
            // add the children into the queue
            queue.push(temp.left, temp.right)
        }
    }

    return root;
};