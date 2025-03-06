// https://leetcode.com/problems/find-missing-and-repeated-values

function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let n = grid.length;
  let count = new Array(n * n + 1).fill(0); // Track occurrences
  let a = 0,
    b = 0;

  // Count occurrences in a single pass
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count[grid[i][j]]++;
    }
  }

  // Find the missing and repeated numbers
  for (let i = 1; i <= n * n; i++) {
    if (count[i] === 2) a = i; // Repeated number
    if (count[i] === 0) b = i; // Missing number
  }

  return [a, b];
}

const x = [
  [1, 3],
  [2, 2],
];
const y = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];

console.log(findMissingAndRepeatedValues(x)); // [2, 1]
console.log(findMissingAndRepeatedValues(y)); // [5, 5]
