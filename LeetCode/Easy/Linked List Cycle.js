// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
    // Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// we are essentially checking if the linked list loops
var hasCycle = function(head) {
    // use two pointers to track two speeds of traversing the linked list
        // techinically don't need to make both, can use head for one of the variables, just nice to be desctriptive
    let slow = head;
    let fast = head;
    
    // since the fast variable "races down the tracks" we only want to run this while loop when fast has value
        // if fast ever becomes null, then there is no loop in the linked list
    while(fast && fast.next) {
        // traverse down the linked list, slow goes one at a time, fast goes two at a time
        slow = slow.next;
        fast = fast.next.next;
        // if they are ever the same value then it is because fast looped around and caught slow on a return loop
        if (slow === fast) {
            return true;
        }
    }
    
    // if the while loop ever ends, it will be because fast saw a null node: meaning the linked list has no loop
    return false;
};

// the beginning is the same as Linked List Cycle
    // we still have to check if there is a loop, however, now we have more to do after confirming a loop
    var detectCycle = function(head) {
        let slow = head;
        let fast = head;
    
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            // if there is a loop
            if (slow === fast) {
                // reset the slow pointer to the head
                slow = head;
                // increment each tracker one by one until they meet
                while (slow !== fast) {
                    slow = slow.next
                    fast = fast.next
                }
                // once they meet, break out of the while loop and return the node as asked
                return slow;
            }
        }
        // return null when there is no loop
        return null;
    };
    
    // https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes
    // bramphft does an excellent job of explaining the math behind why this method works and uses diagrams to visualize the steps we took