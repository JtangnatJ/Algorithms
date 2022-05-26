// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
    // Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed).
    // It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list

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