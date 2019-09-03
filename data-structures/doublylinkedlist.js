class DoublyLinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    pop() {
        // if the doubly linked list is empty, there is nothing to pop. return undefined.
        // save removed node to a variable. 
        if (!this.head) return undefined;
        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }

    shift() {
        if (!this.head) return undefined;
        const removedHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedHead.next;
            this.head.prev = null;
            removedHead.next = null;
        }
        this.length--;
        return removedHead;
    }

    unshift(val) {
        const newNode = new DoublyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let currentIndex, current;
        if (index <= this.length / 2) {
            currentIndex = 0;
            current = this.head;
            while (currentIndex !== index) {
                current = current.next;
                currentIndex++;
            }
        } else {
            currentIndex = this.length - 1;
            current = this.tail;
            while (currentIndex !== index) {
                current = current.prev;
                currentIndex--;
            }
        }
        return current;
    }
}

