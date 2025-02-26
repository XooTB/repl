// https://leetcode.com/problems/single-number/

// In this case whenever 2 same numbers are XOR'ed with each other, they cancel out to form 0, on the other hand if 0 and any number are XOR'ed the output is the number itself. So,

// 7^7 = 0, simple?

// 7^7^7 = what will this be? Well XOR's are associative so let's break it down.

// 7^7 will be 0

// 111 (7)
// 111 (7)
// ^__
// 000 (0)

// so now it's 0 ^ 7, which is

// 000 (0)
// 111 (7)
// ^__
// 111 (7)

// So therefore 7^7^7 = 7, similarly 1^1^2 = 2,

// 4^1^2^1^2 = will be what?

// In this case, the 1's and 2's cancel out and we're left with 4^0 = 4, which is the only number with 1 occurrence and our answer in this case.

function singleNumber(nums: number[]): number {
  return nums.reduce((prev, val) => prev ^ val, 0);
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
