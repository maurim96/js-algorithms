const { updateInventory } = require('../src/02-inventory_update');

describe('Update Inventory Function Tests', () => {
  test('Update quantities and add new items', () => {
    const currentInventory = [[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]];
    const newInventory = [[2, "item-0"], [1, "item-1"], [3, "item-4"], [7, "item-3"]];
    const expected = [
      [4, "item-0"],
      [4, "item-1"],
      [67, "item-2"],
      [14, "item-3"],
      [3, "item-4"]
    ];
    expect(updateInventory(currentInventory, newInventory)).toEqual(expected);
  });

  test('Handle case with no current inventory', () => {
    const currentInventory = [];
    const newInventory = [[2, "item-0"], [1, "item-1"], [3, "item-4"], [7, "item-3"]];
    const expected = [
      [2, "item-0"],
      [1, "item-1"],
      [7, "item-3"],
      [3, "item-4"]
    ];
    expect(updateInventory(currentInventory, newInventory)).toEqual(expected);
  });

  test('Handle case with no new inventory', () => {
    const currentInventory = [[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]];
    const newInventory = [];
    const expected = [
      [2, "item-0"],
      [3, "item-1"],
      [67, "item-2"],
      [7, "item-3"]
    ];
    expect(updateInventory(currentInventory, newInventory)).toEqual(expected);
  });

  test('Handle case with completely different inventories', () => {
    const currentInventory = [[2, "item-0"], [3, "item-1"]];
    const newInventory = [[5, "item-2"], [7, "item-3"]];
    const expected = [
      [2, "item-0"],
      [3, "item-1"],
      [5, "item-2"],
      [7, "item-3"]
    ];
    expect(updateInventory(currentInventory, newInventory)).toEqual(expected);
  });

  test('Handle case with overlapping and non-overlapping items', () => {
    const currentInventory = [[1, "item-A"], [2, "item-B"]];
    const newInventory = [[1, "item-B"], [3, "item-C"], [2, "item-D"]];
    const expected = [
      [1, "item-A"],
      [3, "item-B"],
      [3, "item-C"],
      [2, "item-D"]
    ];
    expect(updateInventory(currentInventory, newInventory)).toEqual(expected);
  });
});
