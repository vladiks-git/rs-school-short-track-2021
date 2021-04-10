/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let counter = 0;
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) {
        counter++;
      } else {
        break;
      }
    }
    if (counter === 1) {
      res += str[i];
    } else {
      res += `${counter}${str[i]}`;
    }
    i += counter - 1;
  }
  return res;
}

module.exports = encodeLine;
