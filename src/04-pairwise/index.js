function pairwise(arr, arg) {
    const usedIndices = new Set();
    let sumOfIndices = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (usedIndices.has(i)) continue; // Skip if index is already used
  
      for (let j = i + 1; j < arr.length; j++) {
        if (usedIndices.has(j)) continue; // Skip if index is already used
  
        if (arr[i] + arr[j] === arg) {
          sumOfIndices += i + j;
          usedIndices.add(i);
          usedIndices.add(j);
          break; // Move to the next i after finding a valid pair
        }
      }
    }
  
    return sumOfIndices;
  }
  
  module.exports = { pairwise };
  