// You are given the heads of two sorted linked lists list1 and list2.
    // Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    // Return the head of the merged linked list.

var mergeTwoLists = function(l1, l2) {
    // we have to start a new linked list that we can return
    let merged = new ListNode();
    //set a variable tracker to reference the beginning of the list
    let head = merged;
    
    // we want to run it while both lists still have nodes to traverse
    while(l1 !== null && l2 !== null) {
        // check the value of both nodes and add into our merged list, travel down the list whose node gets added
        if (l1.val < l2.val) {
            merged.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            merged.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        // travel down our merged list so we are constantly adding new nodes rather than replacing them
        merged = merged.next;
    }
    
    // our while loop ends when one of the original lists end
        // we use this line to add the remainder of the other list
    merged.next = l1 || l2;

    // because our original merge head is empty, we return head.next for a node that actually contains value
    return head.next;
};