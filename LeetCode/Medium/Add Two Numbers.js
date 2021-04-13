// You are given two non-empty linked lists representing two non-negative integers.
    // The digits are stored in reverse order, and each of their nodes contains a single digit.
    // Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Definition for singly-linked list:
//     function ListNode(val, next) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }

var addTwoNumbers = function(l1, l2) {
    let sumList = new ListNode();
    let current = sumList;
    let carryOver = 0; // this will be our current sum at any given time and will allow us to keep track of what needs to be carried over to the next node

    while(l1 || l2 || carryOver) { // we want things to be done if there are l1 nodes or l2 nodes remaining, and when we have a number to carry over and make a new node with
        if (l1) {
            carryOver += l1.val; // calculate the total so far, will only be done if there are still l1 nodes
            l1 = l1.next; // move down the l1 list
        }

        if (l2) {
            carryOver += l2.val; // repeat for l2
            l2 = l2.next;
        }

        singlesDigit = carryOver % 10; // we want to isolate the first place digit of our current sum
        carryOver = Math.floor(carryOver / 10); // what needs to be carried over will remain
        current.next = new ListNode(singlesDigit); // make a new node out of our first place digit and make it the next node in the list
        current = current.next; // move down the list
    }
    // our sumList was initialized with an empty node so return sumList.next to avoid that first empty node
    return sumList.next;
};