function expandedForm(num: number, carry?: number[]) {
  // Calculate the Change & rounded value.
  const change = num % Math.pow(10, num.toString().length - 1);
  const val = num - change;

  // Return the whole thing if the change is 0;
  if (change === 0) {
    const res = carry ? [...carry, num] : [num];
    return res.join(" + ");
  }

  // calculate the carry
  let c = carry ? [...carry, val] : [val];

  // perform recursion
  return expandedForm(change, c);
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(900000000));
console.log(expandedForm(74823));
