class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.size = 0; // track the number of stored key-value pairs
    this.loadFactor = loadFactor;
  }

  // helper method to ensure he index is within bounds
  _checkIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("trying to access index out of boundsd");
    }
  }

  // Hash function to generate hash code for string key
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
  }

  // resize the buckets array and reharsh the keys when growing the map
  _resize() {
    const newCapacity = this.buckets.length * 2;
    const newBuckets = new Array(newCapacity);
    const oldBuckets = this.buckets;

    this.buckets = newBuckets;
    this.size = 0;

    for (let bucket of oldBuckets) {
      if (bucket) {
        for (let [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

//   add o update a key value pair in map

set(key, value){
    if (typeof key !== "string"){
        throw new Error("keys must be strings.")
    }

    const index = this.hash(key)
    this._checkIndex(index)

    if(!this.buckets[index]){
        this.buckets[index] = []
    }

    const bucket = this.buckets[index]
    const existing = bucket.find(([k])=> k === key)

    if (existing){
        existing[1]= value //update value if the key exists
    }else{
        bucket.push([key, value]) //insert new key-value pair
        this.size++
    }

    // check load factor and resize if necessary
    if(this.size / this.buckets.length > this.loadFactor){
        this._resize()
    }
}

// get the value associated with a key
get(key){
    const index = this.hash(key)
    this._checkIndex(index)

    const bucket = this.buckets[index]
    if(!bucket) return null

    const found = bucket.find(([k])=> k === key)
    return found ? found[1] : null
}

// check if the map contains a specific key
has(key){
    return this.get(key) !== null
}

// remove a key-value pair
remove(key){
  const index = this.has(key)
  this._checkIndex(index)
  
  const bucket = this.buckets[index]
  if (!bucket) return false

  const entryIndex = bucket.findIndex(([k])=> k === key)
  if(entryIndex !== -1){
    bucket.splice(entryIndex, 1)
    this.size--
    return true
  }
  return false
}

// Get the number of stored keys
length(){
    return this.size
}
// clear all  key-value pairs from the map
clear(){
    this.buckets = new Array( this.buckets.length)
    this.size = 0
}

// Get all keys in the map
keys(){
    const keysArray = []
    for (let bucket of this.buckets){
        if(bucket){
            for (let [key] of bucket){
                keysArray.push(key)
            }
        }
    }
    return keysArray
}

// get all values in the map

values(){
    const valuesArray = []
    for(let bucket of this.buckets){
        if(bucket){
            for(let [,value] of bucket){
                valuesArray.push(value)
            }
        }
    }
    return valuesArray
}

// Get all key-value pairs as an array of [key, value] arrays

entries(){
    const entriesArray = []
    for (let bucket of this.buckets){
        if(bucket){
            for (let [key, value] of bucket){
                entriesArray.push([key, value])
            }
        }
    }
    return entriesArray
}
}



// Test cases
const test = new HashMap();

// Adding initial values
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Overwrite some values
test.set('apple', 'green');
test.set('banana', 'green');

// Add another element to force rehashing
test.set('moon', 'silver');

// Test methods after resizing
console.log(test.get('moon')); // 'silver'
console.log(test.keys()); // All keys
console.log(test.values()); // All values
console.log(test.entries()); // All entries
console.log(test.has('lion')); // true
console.log(test.remove('kite')); // true
console.log(test.length()); // 12 after removing one key
test.clear();
console.log(test.length()); // 0 after clearing all