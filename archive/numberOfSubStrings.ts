//https://leetcode.com/problems/number-of-substrings-containing-all-three-characters

// Explanation:
// Tracking Last Occurrences: As we iterate through the string, we are tracking the last found occurances of each of the characters.

// Check Validity: Whenever all three characters have been found (i.e., lastA, lastB, and lastC are all non-negative), we compute the minimum of these indices. This minimum represents the earliest position where a valid substring can start.
// Count Substrings: The number of valid substrings ending at the current index i is min + 1, which accounts for all possible starting points from index 0 up to min.

// This approach reduces the time complexity from O(n^2) to O(n) by efficiently determining valid substrings using a sliding window technique.

function numberOfSubstrings(s: string): number {
  let res = 0;
  let lastA = -1;
  let lastB = -1;
  let lastC = -1;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "a") lastA = i;
    else if (c === "b") lastB = i;
    else if (c === "c") lastC = i;

    if (lastA !== -1 && lastB !== -1 && lastC !== -1) {
      const min = Math.min(lastA, lastB, lastC);
      res += min + 1;
    }
  }

  return res;
}

console.log(numberOfSubstrings("abcabcaabbabcccabcab"));
console.log(numberOfSubstrings("aaacb"));
console.log(numberOfSubstrings("abc"));
