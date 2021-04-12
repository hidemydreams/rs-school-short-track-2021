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
  const numToString = n.toString();
  const sortedNum = numToString.split('').sort();
  const numArray = numToString.split('');
  numArray.splice(numArray.indexOf(sortedNum[0]), 1);
  return +numArray.join('');
}

module.exports = deleteDigit;
