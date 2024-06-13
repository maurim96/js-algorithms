const { sym } = require("../src/01-symmetric_difference");

describe('Symmetric Difference Function Tests', () => {
  test('Symmetric difference of two arrays', () => {
    const result = sym([1, 2, 3], [5, 2, 1, 4]);
    expect(result).toEqual(expect.arrayContaining([3, 5, 4]));
  });

  test('Symmetric difference of three arrays', () => {
    const result = sym([1, 2, 3], [5, 2, 1, 4], [3, 4]);
    expect(result).toEqual(expect.arrayContaining([5]));
  });

  test('Symmetric difference of arrays with no common elements', () => {
    const result = sym([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });

  test('Symmetric difference of arrays with identical elements', () => {
    const result = sym([1, 1, 1], [1, 1, 1]);
    expect(result).toEqual([]);
  });

  test('Symmetric difference with an empty array', () => {
    const result = sym([1, 2, 3], []);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
  });
});
