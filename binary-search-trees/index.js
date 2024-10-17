class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
    
}

class Tree {
    constructor(array){
        this.root = this.buildTree(this.removeDuplicates(array.sort((a,b)=>a-b)))
    }

    // Helper function to remove duplicates from array
    removeDuplicates(array){
        return [...new Set(array)]
    }

    // Build a balanced tree from a sorted array
    buildTree(array){
        if(array.length === 0) return null

        const mid = Math.floor(array.length /2)
        const root = new Node(array[mid])

        root.left = this.buildTree(array.slice(0, mid))
        root.right = this.buildTree(array.slice(mid + 1))

        return root
    }

    // preety print the tree
prettyPrint(node = this.root, prefix = "", isLeft = true){
    if(node === null) return

    if (node.right !== null){
        this.prettyPrint(node.right, `${prefix}${isLeft ? "| ":" "}`, false)
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)

    if(node.left !== null){
        this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}

// Insert a new value  into the tree
insert(value, node = this.root){
    if(node === null) return new Node(value)
        if(value < node.data){
            node.left = this.insert(value, node.right)
        }

        return node
}

// Helper function to find the minimum value node in a tree
findMiniValueNode(node){
    while ( node.left !== null){
        node = node.left
    }
    return node
}

// Delete a value from the tree
deleteItem(value, node = this.root){
    if (node === null) return node

    if(value < node.data){
        node.left = this.deleteItem(value, node.left)
    }else if (value > node.data){
        node.right = this.deleteItem(value, node.right)
    }else{
        // node to Delete found
        // case 1: no children (leaf node)
        if (node.left === null && node.right === null) return null

        // case 2: One child
        if(node.left === null) return node.right
        if(node.node.right === null) return node.left


        // case 3: Two children
        const minValueNode = this.findMiniValueNode(node.right)
        node.data = minValueNode.data
        node.right = this.deleteItem(minValueNode.data, node.right)
    }
    return node
}
// find a node by value
find(value, node = this.root){
    if(node === null || node.data === value) return node

    if(value < node.data){
        return this.find(value, node.left)
    }else{
        return this.find(value, node.right)
    }
}

// Breadth- first traversal (level-order)
levelOrder(callback){
    if(!callback) throw new Error("callback function is required.")
        const queue = [this.root]
    while(queue.length > 0){
        const node = queue.shift()
        callback(node)

        if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
    }
}

// Depth-first traversals (inOrder, preOrder, postOrder)
inOrder(callback, node = this.root){
    if(!callback) throw new Error("callback function is required.")

        if(node === null) return

         this.inOrder(callback, node.left)
         callback(node)
         this.inOrder(callback, node.right)
}
preOrder(callback, node = this.root){
    if(!callback) throw new Error("callback functuon is required.")

        if(node === null) return
        callback(node)
        this.postOrder(callback, node.left)
        this.postOrder(callback, node.right)
}

postOrder(callback, node = this.root){
    if(!callback) throw new Error("callback function is required.")
        if(node === null) return


    this.postOrder(callback, node.left)
    this.postOrder(callback, node.right)
    callback(node)

}
// Height of a node
height(node){
    if(node === null) return -1

    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)

    return Math.max(leftHeight, rightHeight) + 1
}

// Depth of the node
depth(node, currentNode = this.root, currentDepth = 0){
    if(currentNode === null) return - 1

    if(node.data === currentNode.data) return currentDepth

    if(node.data < currentNode.data){
        return this.depth(node, currentNode.left, currentDepth + 1)
    }else{
        return this.depth(node, currentNode.right, currentDepth + 1)
    }
}
// check if the tree is balanced
isBalanced(node = this.root){
    if(node === null) return true

    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)

    if(Math.abs(leftHeight - rightHeight) > 1) return false
    return this.isBalanced(node.left) && this.isBalanced(node.right)
}

// Rebalanced
 rebalance(){
    const values = []

    this.inOrder((node)=> values.push(node.data))
    this.root = this.buildTree(values)
 }
}


// helper function to generate an array of random numbers
function generateRandomArray(size, max){
    return Array.from({length: size}, ()=> Math.floor(Math.random() * max))
}


// Driver script
const randomNumbers = generateRandomArray(15, 100); // Generate random numbers < 100
const tree = new Tree(randomNumbers);

// Check if the tree is balanced
console.log("Is the tree balanced?", tree.isBalanced());

// Print the tree
console.log("Level Order Traversal:");
tree.levelOrder(node => console.log(node.data));

console.log("In Order Traversal:");
tree.inOrder(node => console.log(node.data));

console.log("Pre Order Traversal:");
tree.preOrder(node => console.log(node.data));

console.log("Post Order Traversal:");
tree.postOrder(node => console.log(node.data));

// Unbalance the tree by adding values > 100
tree.insert(150);
tree.insert(200);
tree.insert(250);

// Check if the tree is unbalanced
console.log("Is the tree balanced after unbalancing?", !tree.isBalanced());

// Rebalance the tree
tree.rebalance();

// Check if the tree is balanced again
console.log("Is the tree balanced after rebalancing?", tree.isBalanced());

// Print the tree after rebalancing
console.log("Level Order Traversal after rebalancing:");
tree.levelOrder(node => console.log(node.data));

console.log("In Order Traversal after rebalancing:");
tree.inOrder(node => console.log(node.data));

console.log("Pre Order Traversal after rebalancing:");
tree.preOrder(node => console.log(node.data));

console.log("Post Order Traversal after rebalancing:");
tree.postOrder(node => console.log(node.data));
