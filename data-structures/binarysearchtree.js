class BinarySearchTreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new BinarySearchTreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (!this.root) return false;

        let currentNode = this.root;
        while (true) {
            if (val === currentNode.val) return currentNode;
            if (val < currentNode.val) {
                if (!currentNode.left) return false;
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) return false;
                currentNode = currentNode.right;
            }
        }
    }

    contains(val) {
        if (!this.root) return false;

        let currentNode = this.root;
        while (true) {
            if (val === currentNode.val) return true;
            if (val < currentNode.val) {
                if (!currentNode.left) return false;
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) return false;
                currentNode = currentNode.right;
            }
        }
    }

    breadthFirstSearch() {
        const queue = [];
        const visited = [];
        if (this.root) queue.push(this.root);
        while (queue.length) {
            const dequeued = queue.shift();
            visited.push(dequeued);            
            if (dequeued.left) queue.push(dequeued.left);
            if (dequeued.right) queue.push(dequeued.right);
        }
        return visited;
    }
}