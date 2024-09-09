 function fibs(n){
    if(n<=0) return []
    if(n===1) return [0]

    const result = [0,1]

    for(let i = 2; i<n; i++){
        result.push(result[i-1] + result[i-2])
    }
     return result
 }


 console.log(fibs(9))

// another way to do it 

 function fibs(n) {
    if (n === 1) return [0];  // If n is 1, return [0]
    if (n === 2) return [0, 1];  // If n is 2, return [0, 1]
  
    const result = [0, 1];  // Start the sequence with the first two Fibonacci numbers
    let prev1 = 0;  // This will track the second-to-last Fibonacci number
    let prev2 = 1;  // This will track the last Fibonacci number
  
    for (let i = 2; i < n; i++) {
      const nextFib = prev1 + prev2;  // Calculate the next Fibonacci number
      result.push(nextFib);  // Add the new Fibonacci number to the result array
      prev1 = prev2;  // Update prev1 to the last Fibonacci number
      prev2 = nextFib;  // Update prev2 to the new Fibonacci number
    }
  
    return result;
  }
  
  console.log(fibs(8));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]

//   another way to get fibbs sequence using recursions

function fibRec(n){
    if(n<=0) return []
    if(n===1) return [0]
    if(n===2) return [0,1]

    const sequance = fibRec(n - 1)
sequance.push(sequance[sequance.length - 1] + sequance[sequance.length - 2])
return sequance
}


console.log("recursion",fibRec(5))



// merge sort using recursions
function mergeSort (arr){
    // base case
    if(arr.length <= 1){
        return arr
    }

// split the array into two halves
  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  // Merge the two sorted halves
  return merge(left, right);

}

const merge = (left, right) =>{
    let result = []
    let i = 0
    let j = 0


    while (i < left.length &&  j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(left[j])
            j++
        }
    }


    return [...result, ...left.slice(i), ...right.slice(j)]
}


// Test cases
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110]));



// another way to do the above:

function mergeSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middleIndex = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middleIndex);
    const rightArray = arr.slice(middleIndex);
  
    // Recursively split & merge
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
  
  function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right arrays and push the smaller one into the resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // Move left pointer
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // Move right pointer
      }
    }
  
    // Concatenate remaining elements from either left or right array (if any)
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Test cases
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(mergeSort([105, 79, 100, 110]));        // Output: [79, 100, 105, 110]
  