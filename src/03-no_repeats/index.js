function permAlone(str) {
    // Helper function to check if a string has consecutive repeated letters
    function hasConsecutiveRepeats(s) {
      // Iterate through the string to check for consecutive repeats
      for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
          return true; // Return true if consecutive repeats are found
        }
      }
      return false; // Return false if no consecutive repeats are found
    }
  
    // Helper function to generate permutations recursively
    function generatePermutations(arr, n) {
      if (n === 1) {
        // When n is 1, a full permutation has been formed
        const permutation = arr.join(''); // Join array to form the permutation string
        if (!hasConsecutiveRepeats(permutation)) {
          // Check if the permutation has no consecutive repeats
          permutations.push(permutation); // Add valid permutation to the result array
        }
      } else {
        // Recursively generate permutations
        for (let i = 0; i < n; i++) {
          generatePermutations(arr, n - 1); // Recursively call with n - 1
          const j = n % 2 === 0 ? i : 0; // Determine the index for swapping
          [arr[j], arr[n - 1]] = [arr[n - 1], arr[j]]; // Swap elements
        }
      }
    }
  
    const permutations = []; // Array to store all valid permutations
    generatePermutations(str.split(''), str.length); // Start generating permutations
    return permutations.length; // Return the count of valid permutations
  }
  
  module.exports = { permAlone };
  