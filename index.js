class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.size = 0;
    }

    // Adds a new node with the given value to the end of the list
    append(value) {
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode
        }
        this.size++;
    }

    // Adds a new node with the given value to the start of the list
    prepend(value) {
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }
    
    // returns the node at the given index, null if out of bounds
    at(index) {
        let currNode = index >= 0 ? this.head : null;
        for (let i = 0; i < index; i++) {
            currNode = currNode.nextNode;
            if (currNode === null)
                return currNode;
        }
        return currNode;
    }

    // removes and returns the last element in the list, null if empty
    pop() {
        if (this.size === 0)
            return null;

        if (this.size === 1) {
            let toReturn = this.head;
            this.size = 0;
            this.head = null;
            this.tail = null;
            return toReturn;
        }

        // Assuming that there's at least 2 nodes in the list, iterate through keeping track of a curr and prev node, then adjust pointers accordingly
        let prevNode = this.head;
        let currNode = this.head.nextNode;

        while (currNode.nextNode !== null) {
            prevNode = currNode;
            currNode = currNode.nextNode;
        }

        prevNode.nextNode = null;
        this.tail = prevNode;
        this.size--;
    }

    // returns true if the linked list contains the current value, false otherwise
    contains(value) {
        // TODO
    }

    // returns the index of the node containing value, or null if not found
    find(value) {
        // TODO
    }

    // ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        return 'TODO'
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new LinkedList();


// Testing area
list.append("third");
list.prepend("second");
list.prepend("first!!");

console.log(list.toString())