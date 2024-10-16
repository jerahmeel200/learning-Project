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
}
