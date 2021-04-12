/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  const arr1 = [];
  let str;
  const res = {};
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.');
    str = '';
    for (let j = arr.length - 1; j >= 0; j--) {
      str += `.${arr[j]}`;
      arr1.push(str);
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (res[arr1[i]] != null) res[arr1[i]] += 1;
    else res[arr1[i]] = 1;
  }
  return res;
}

module.exports = getDNSStats;
