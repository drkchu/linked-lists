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

console.log(list)