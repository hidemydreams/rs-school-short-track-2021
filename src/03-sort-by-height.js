/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const result = [];
  result.length = array.length;
  // other numbers that are higher then -1
  const arrayToSort = [];

  array.forEach((num, i) => {
    if (num === -1) {
      result[i] = num;
    } else {
      arrayToSort.push(num);
    }
  });

  for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined) {
      const min = arrayToSort.reduce((acc, curr) => (acc < curr ? acc : curr));
      result[i] = min;
      // removing element that we have just added to newly sorted arr
      arrayToSort.splice(arrayToSort.indexOf(min), 1);
    }
  }

  return result;
}

module.exports = sortByHeight;
