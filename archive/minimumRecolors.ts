// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks

function minimumRecolors(blocks: string, k: number): number {
  let min = k;
  for (let i = 0; i <= blocks.length - k; i++) {
    const x = blocks.slice(i, i + k).match(/B/g)?.length || 0;
    if (k - x < min) {
      min = k - x;
    }
  }
  return min;
}

console.log(minimumRecolors("WBBWWBBWBW", 7));
console.log(minimumRecolors("WBWBBBW", 2));
