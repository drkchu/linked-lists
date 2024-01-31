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
        let currNode = this.head;
        while (currNode !== null) {
            if (currNode.value === value)
                return true;
            currNode = currNode.nextNode;
        }
        return false;
    }

    // returns the index (zero-based) of the node containing value, or null if not found
    find(value) {
        let currIndex = 0;
        let currNode = this.head;

        if (!(this.contains(value))) {
            return null;
        }

        while (currNode !== null) {
            if (currNode.value === value) {
                return currIndex;
            }
            currIndex++;
            currNode = currNode.nextNode;
        }

        return null;
 
    }

    // ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let result = '';
        let currNode = this.head;

        while (currNode !== null) {
            result += `( ${currNode.value} ) -> `
            currNode = currNode.nextNode
        }

        result += 'null'
        return result;
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
list.prepend("first!!");
list.prepend("first!!");

console.log(list.toString());