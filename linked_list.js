export class LinkedList {
    constructor() {
        this._head = null;
    }

    append (value) {
        let currentNode = this.head
        if (this.head == null) {
            this._head = new Node(value, null);
        }
        else {
            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = new Node(value, null);
        }
    }

    prepend (value) {
        let newNode = new Node (value, this.head);
        this._head = newNode;
    }

    get size() {
        let k = 0
        let currentNode = this.head;
        while (currentNode != null) {
            k += 1;
            currentNode = currentNode.nextNode
        }
        return k
    }

    get head() {
        return this._head
    }

    get tail() {
        let currentNode = this.head;
        let nextNodePreview = currentNode.nextNode;
        while (nextNodePreview != null) {
            currentNode = currentNode.nextNode;
            nextNodePreview = currentNode.nextNode;
        }
        let tail = currentNode;
        return tail;
    }

    at (index) {
        let k = 0;
        let currentNode = this.head;
        while (k < index) {
            currentNode = currentNode.nextNode;
            k++;
        }
        return currentNode;
    }

    pop () {
        if (this.head == null) {
            return
        }
        let previousNode = null;
        let currentNode = this.head;
        let nextNodePreview = currentNode.nextNode;
        while (nextNodePreview != null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode
            nextNodePreview = currentNode.nextNode
        }
        previousNode.nextNode = null;
        return 
    }

    contains (value) {
        let currentNode = this.head;
        while (currentNode.nextNode != null) {
            if (currentNode.value == value) {
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    find (value) {
        let currentNode = this.head;
        let k = 0;
        while (currentNode.nextNode != null)  {
            if (currentNode.value == value) {
                return k
            }
            currentNode = currentNode.nextNode
            k++;
        }
        return null
    }

    update (index, newValue) {
        let currentNode = this.head;
        let k = 0;
        while (currentNode.nextNode != null)  {
            if (k == index) {
                currentNode.value = newValue;
                return
            }
            currentNode = currentNode.nextNode
            k++;
        }
        return
    }


    get toString() {
        let linkedListString = '';
        let currentNode = this.head;
        for (let k = 0; k <= this.size; k++) {
            if (currentNode == this.head) {
                linkedListString = `( ${currentNode.value} )`;
            } else if (currentNode == null) {
                linkedListString += `-> ( ${currentNode} )`;
                break
            }
            else {
                linkedListString += ` -> ( ${currentNode.value} )`;
            }
            currentNode = currentNode.nextNode;
        }
        return linkedListString;
    }
}


class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}