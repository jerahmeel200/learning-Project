import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.headNode = null; // start with an empty list
    this.sizeCount = 0; //  size of the list will be empty
  }

  append(value) {
    const newNode = new Node(value); //create new node

    if (!this.headNode) {
      this.headNode = newNode; // if list is empty set as head
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode; // traverse to the last node
      }
      currentNode.nextNode = newNode; // attach the new node to the end
    }
    this.sizeCount++; // increase the size count
  }

  // function to add a new node at the start of the list

  prepend(value) {
    const newNode = new Node(value); // create a new node
    newNode.nextNode = this.headNode; // point the new node to the current head
    this.headNode = newNode; // set the new node as head
    this.sizeCount++; // increase the size count
  }
  // get the size of the list
  size() {
    return this.sizeCount; // return the number of nodes
  }
  // get the head node
  head() {
    return this.head; //return the first node (head)
  }
  // get the last node
  // Start from the head.
  // Traverse until currentNode.nextNode is null.

  tail() {
    let currentNode = this.headNode;
    if (!currentNode) return null; // if the list is empty return null

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode; //travers to the last node
    }

    return currentNode; //return the last node
  }

  // get node at a specific index
  at(index) {
    if (index >= this.sizeCount || index < 0) return null; //invalid index
    let currentNode = this.headNode;
    let count = 0;

    while (currentNode && count < index) {
      currentNode = currentNode.nextNode; // traverse to the target index
      count++;
    }
    return currentNode; // return the node at the index
  }

  // remove the last node from the list (pop)
  pop() {
    if (!this.headNode) return null; //list is empty
    if (!this.headNode.nextNode) {
      const poppedNode = this.headNode;
        this.headNode = null // if only one node make the list empty
        this.sizeCount--
        return poppedNode

    }
    let currentNode = this.headNode
    while(currentNode.nextNode.nextNode){
        currentNode = currentNode.nextNode //traverse to the second last node
    }
    const poppedNode = currentNode.nextNode
    currentNode.nextNode = null
    this.sizeCount--
    return poppedNode
  }

//   check if a value exist in a list
contains(value){
let currentNode = this.headNode

while(currentNode){
    if(currentNode.value === value) return true // value found 

    currentNode = currentNode.nextNode
}
return false // value not found
}

// find the index of a value in the list
// Traverse the list and keep track of the index.
// Return the index if found, null otherwise.
find(value){
    let currentNode = this.headNode
    let index = 0

    while (currentNode){
        if(currentNode.value === value) return index // value found 
        currentNode = currentNode.nextNode
        index++
    }
    return null // value not found
}

// convert and return a string representation of the list
// Traverse through the nodes and format them as ( value ) -> ( value ) -> null.

toString(){
    let currentNode = this.headNode
    let result = ""


    while (currentNode){
        result += `(${currentNode.value}) -> `
        currentNode = currentNode.nextNode
    }

    return result + 'null' //end with null
}

insertAt(value, index) {
    if(index > this.sizeCount || index < 0) return null
    const newNode = new Node(value)

    if(index === 0){
        this.prepend()// if inserting  at the start use prepend 

    }else{
        let previousNode = this.at(index - 1)
        newNode.nextNode = previousNode.nextNode
        previousNode.nextNode = newNode
        this.sizeCount++
    }
}


// remove Node at a specific index in the list
// The removeAt method removes a node at a specified index:

// If the index is 0, remove the head.
// Otherwise, unlink the node at the specified index.

removeAt(index){
    if(index >= this.sizeCount || index < 0) return null

    if(index === 0){
        this.headNode = this.headNode.nextNode // remove the head node
    }else{
        let previousNode = this.at(index -1)
        previousNode.nextNode = previousNode.nextNode.nextNode //skip the node at the index
    }
    this.sizeCount--
}

}
