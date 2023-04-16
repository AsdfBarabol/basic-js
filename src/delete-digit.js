const { NotImplementedError } = require('../extensions/index.js');

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
  let num = Array.from(String(n), Number);
  return num.reduce((k, n, i) => Math.max(k, +num.filter((a, j) => j != i).join('')), 0);
}

module.exports = {
  deleteDigit
};
