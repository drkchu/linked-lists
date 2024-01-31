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
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new LinkedList();


list.append("bye");
list.prepend("bye before");
list.prepend("first!!");


console.log(list)