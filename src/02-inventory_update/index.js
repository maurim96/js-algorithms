function updateInventory(arr1, arr2) {
    // Step 1: Convert current inventory array to a Map
    const inventoryMap = new Map();
    arr1.forEach(item => {
      inventoryMap.set(item[1], item[0]);
    });
  
    // Step 2: Update quantities or add new items from the new inventory array
    arr2.forEach(item => {
      if (inventoryMap.has(item[1])) {
        // If the item exists in the inventory, update the quantity
        inventoryMap.set(item[1], inventoryMap.get(item[1]) + item[0]);
      } else {
        // If the item does not exist, add it to the inventory
        inventoryMap.set(item[1], item[0]);
      }
    });
  
    // Step 3: Convert the inventory map back into a 2D array and sort it
    const updatedInventory = Array.from(inventoryMap)
      // Convert each map entry back to an array [quantity, item]
      .map(([key, value]) => [value, key])
      // Sort the array alphabetically by item name
      .sort((a, b) => a[1].localeCompare(b[1]));
  
    return updatedInventory;
}

module.exports = { updateInventory };
  