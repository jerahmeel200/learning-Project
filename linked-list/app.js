import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());  // Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// You can also test other methods here:
console.log(list.size());      // Output: 6
console.log(list.head());      // Output: Node { value: 'dog', nextNode: ... }
console.log(list.tail());      // Output: Node { value: 'turtle', nextNode: null }
console.log(list.contains("parrot"));  // Output: true
console.log(list.find("hamster"));     // Output: 3
list.insertAt("rabbit", 2);            // Insert at index 2
console.log(list.toString());          // Output: ( dog ) -> ( cat ) -> ( rabbit ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
list.removeAt(4);                      // Remove at index 4
console.log(list.toString());          // Output: ( dog ) -> ( cat ) -> ( rabbit ) -> ( parrot ) -> ( snake ) -> ( turtle ) -> null
