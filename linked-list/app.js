console.log("hellow world")



// Linked Lists of nodes
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a value at beginning of list
    addStart(value) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  
    // Add a value at end of list
    addEnd(value) {
      const node = new Node(value);
      let curr = this.head;
      if (curr == null) {
        this.head = node;
        return;
      }
  
      while (curr !== null && curr.next !== null) {
        curr = curr.next;
      }
  
      curr.next = node;
    }
  }
  
  const list = new LinkedList();
  list.addStart(1);
  list.addStart(2);
  list.addEnd(3);
  
  console.log(list.head.value); // 2 (head of list)