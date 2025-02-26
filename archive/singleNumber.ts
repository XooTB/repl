// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  return nums.reduce((prev, val) => prev ^ val, 0);
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
