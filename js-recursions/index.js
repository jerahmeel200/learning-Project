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

//  function fibs(n) {
//     if (n === 1) return [0];  // If n is 1, return [0]
//     if (n === 2) return [0, 1];  // If n is 2, return [0, 1]
  
//     const result = [0, 1];  // Start the sequence with the first two Fibonacci numbers
//     let prev1 = 0;  // This will track the second-to-last Fibonacci number
//     let prev2 = 1;  // This will track the last Fibonacci number
  
//     for (let i = 2; i < n; i++) {
//       const nextFib = prev1 + prev2;  // Calculate the next Fibonacci number
//       result.push(nextFib);  // Add the new Fibonacci number to the result array
//       prev1 = prev2;  // Update prev1 to the last Fibonacci number
//       prev2 = nextFib;  // Update prev2 to the new Fibonacci number
//     }
  
//     return result;
//   }
  
//   console.log(fibs(8));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]