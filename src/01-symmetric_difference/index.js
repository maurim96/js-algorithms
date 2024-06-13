// Function to calculate the symmetric difference of multiple arrays
function sym(...args) {
  // Reduce all arrays into a single Set containing the symmetric difference
  return [...args.reduce(reducer, new Set())];
}

// Reducer function to update the result set with the symmetric difference
function reducer(result, arr) {
  // Convert the current array to a Set to remove duplicates
  const compare = new Set(arr);
  
  // Iterate through each value in the current set
  for (let val of compare) {
    if (result.has(val)) {
      // If the value is already in the result set, remove it (cancel out)
      result.delete(val);
    } else {
      // If the value is not in the result set, add it
      result.add(val);
    }
  }
  return result;
}

module.exports = { sym };
