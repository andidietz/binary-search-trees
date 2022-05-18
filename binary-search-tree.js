class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    let current = this.root

    while (true) {
      if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val)
          return this
        } else {
          current = current.right
        }
      } else if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val)
          return this
        } else {
          current = current.left
        }
      } else {
        this.root = new Node(val) 
        return this
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val)
        return this
      }
        return this.insertRecursively(val, current.right)
    } else {
      if (current.left === null) {
        current.left = new Node(val)
        return this
      } else {
        return this.insertRecursively(val, current.left)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    let located = false
    
    if (current.val === val) {
      return current
    }

    while (current && !located) {
      if (val < current.val) {
        current = current.left
      } else if (val > current.val) {
        current = current.right
      } else {
        located = true
      }
    }

    if (!located) return undefined
    return current
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined

    if (current.val === val) {
      return current
    }

    if (val < current.val) {
      if (current.left === null) return undefined
      return this.findRecursively(val, current.left)
    } else if (val > current.val) {
      if (current.right === null) return undefined
      return this.findRecursively(val, current.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current = this.root
    let visitedVals = []

    function traverse(current) {
      visitedVals.push(current.val)
      if (current.left) traverse(current.left)
      if (current.right) traverse(current.right)
    }
    
    traverse(current)
    return visitedVals
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let current = this.root
    let visitedVals = []

    function traverse(current) {
      if (current.left) traverse(current.left)
      visitedVals.push(current.val)
      if (current.right) traverse(current.right)
    }
    
    traverse(current)
    return visitedVals
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let current = this.root
    let visitedVals = []

    function traverse(current) {
      if (current.left) traverse(current.left)
      if (current.right) traverse(current.right)
      visitedVals.push(current.val)
    }
    
    traverse(current)
    return visitedVals
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let current = this.root
    let queue = []
    let visitedVals = []

    queue.push(current)

    while (queue.length) {
      current = queue.shift()
      visitedVals.push(current.val)
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }

    return visitedVals
  }
}

module.exports = BinarySearchTree;