// https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;
  let left = 0;
  let right = x;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return Math.floor(right);
}

console.log(mySqrt(4));
console.log(mySqrt(8));
