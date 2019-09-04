class SinglyLinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    unshift(val) {
        const newNode = new SinglyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return current;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;
        let currentIndex = 1;
        let current = this.head.next;
        while (currentIndex !== index) {
            current = current.next;
            currentIndex++;
        }
        return current;
    }

    set(index, val) {
        const foundNode = get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        } 
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        const newNode = new SinglyLinkedListNode(val);
        const previousNode = this.get(index - 1);
        const temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const previousNode = this.get(index - 1);
        const removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }
}