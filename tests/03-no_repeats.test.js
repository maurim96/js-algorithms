const { permAlone } = require('../src/03-no_repeats');

describe('permAlone', () => {
  test('should return 0 for strings with all identical characters', () => {
    expect(permAlone("aaa")).toBe(0);
  });

  test('should return 2 for the string "aab"', () => {
    expect(permAlone("aab")).toBe(2);
  });

  test('should return 6 for the string "abc"', () => {
    expect(permAlone("abc")).toBe(6);
  });

  test('should return 8 for the string "aabb"', () => {
    expect(permAlone("aabb")).toBe(8);
  });

  test('should return the correct number of permutations for strings with unique characters', () => {
    expect(permAlone("abcdefa")).toBe(3600);
    expect(permAlone("abfdefa")).toBe(2640);
  });

  test('should return 0 for the string "zzzzzzzz"', () => {
    expect(permAlone("zzzzzzzz")).toBe(0);
  });

  test('should return 1 for a single character string', () => {
    expect(permAlone("a")).toBe(1);
  });

  test('should return 0 for strings where valid permutations are impossible', () => {
    expect(permAlone("aaab")).toBe(0);
  });

  test('should return the correct number of permutations for "aaabb"', () => {
    expect(permAlone("aaabb")).toBe(12);
  });
});
