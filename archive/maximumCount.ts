// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer

function maximumCount(nums: number[]): number {
  let neg = 0;
  let pos = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] < 0) {
      neg += 1;
    } else if (nums[i] > 0) {
      pos += 1;
    }
  }

  return Math.max(neg, pos);
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([5, 20, 66, 1314]));
