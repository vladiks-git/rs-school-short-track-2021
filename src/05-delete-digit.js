/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    const x = [...arr.slice(0, i), ...arr.slice(i + 1)].join('');
    if (tmp < x) tmp = x;
  }
  return +tmp;
}

module.exports = deleteDigit;
