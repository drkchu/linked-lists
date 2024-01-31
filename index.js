class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    sayHi() {
        console.log("Hi");
    } 
}

let n = new Node("What", null);

n.sayHi()