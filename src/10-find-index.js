/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let found = false;
  let first = 0;
  let last = array.length;
  let middle;
  let res = 0;
  while (!found && first < last) {
    middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      found = true;
      res = middle;
    } else if (array[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return res;
}

module.exports = findIndex;
