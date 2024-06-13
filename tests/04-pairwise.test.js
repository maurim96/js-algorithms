const { pairwise } = require('../src/04-pairwise');

describe('pairwise', () => {
  test('should return 6 for the input [7, 9, 11, 13, 15] and target 20', () => {
    expect(pairwise([7, 9, 11, 13, 15], 20)).toBe(6);
  });

  test('should return 11 for the input [1, 4, 2, 3, 0, 5] and target 7', () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
  });

  test('should return 1 for the input [1, 3, 2, 4] and target 4', () => {
    expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
  });

  test('should return 2 for the input [1, 1, 2] and target 3', () => {
    expect(pairwise([1, 1, 2], 3)).toBe(2);
  });

  test('should return 0 for the input [] and target 100', () => {
    expect(pairwise([], 100)).toBe(0);
  });

  test('should return 10 for the input [0, 0, 0, 0, 1, 1] and target 1', () => {
    expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
  });

  test('should return 6 for the input [1, 1, 1, 1] and target 2', () => {
    expect(pairwise([1, 1, 1, 1], 2)).toBe(6);
  });

  test('should return 7 for the input [1, 2, 3, 4, 5] and target 9', () => {
    expect(pairwise([1, 2, 3, 4, 5], 9)).toBe(7);
  });

  test('should return 6 for the input [0, 0, 0, 0] and target 0', () => {
    expect(pairwise([0, 0, 0, 0], 0)).toBe(6);
  });

  test('should return 0 for the input [1, 2, 3, 4, 5] and target 10', () => {
    expect(pairwise([1, 2, 3, 4, 5], 10)).toBe(0);
  });
});

