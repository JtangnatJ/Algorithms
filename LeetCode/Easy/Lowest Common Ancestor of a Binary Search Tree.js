// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q
    // as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

var lowestCommonAncestor = function(root, p, q) {
    // we start at the root of the tree and traverse if necessary
    while (root) {
        // if both p and q are larger than the root, then both nodes are on the right side of the tree
            // traverse down to the right node and check again
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        // similar to above, if both p and q are smaller than the root, then both nodes are on the left side of the tree
            // traverse down to the left node and try again
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left
        // if p and q are not both larger or both smaller than root,
            // then the nodes are either one on each side of the node or one of the nodes is the root
            // we take this moment to break out of the while loop
        } else {
            break;
        }
    }

    // return the most recent root we were on
    return root;
};

