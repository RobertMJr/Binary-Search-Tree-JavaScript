class Node {
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
		const newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val === current.val) return undefined;
			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	insertRecursive(val) {
		const newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}

		const inserted = (val, current = this.root) => {
			if (val === current.val) return undefined;
			if (val < current.val) {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				return inserted(val, current.left);
			} else {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				return inserted(val, current.right);
			}
		};
		return inserted(val);
	}
	find(val) {
		if (!this.root) return false;
		let current = this.root,
			found = false;
		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
	findRecursive(val) {
		if (!this.root) return false;
		const found = (val, current = this.root) => {
			if (!current) {
				return false;
			}
			if (val < current.val) {
				return found(val, current.left);
			} else if (val > current.val) {
				return found(val, current.right);
			} else {
				return true;
			}
		};
		return found(val);
	}
}

const tree = new BinarySearchTree();
tree.insertRecursive(10);
tree.insertRecursive(5);
tree.insertRecursive(13);
tree.insertRecursive(11);
tree.insertRecursive(2);
tree.insertRecursive(16);
tree.insertRecursive(7);
console.log(tree.find(1));
console.log(tree.findRecursive(1));
console.log(tree.findRecursive(2));
console.log(tree.find(2));

// console.log(tree);
// console.log(tree.root);
