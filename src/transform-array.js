const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr) || !arr instanceof Array) throw new Error ( "'arr' parameter must be an instance of the Array!");
  if (!arr || arr.length == 0) return []
  let newArr = arr.slice();
  let control = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];
  let controlNext = ['--discard-next', '--double-next'];
  let controlPrev = ['--discard-prev', '--double-prev'];
  for (let i = 0; i < newArr.length; i++) {
      if (controlNext.includes(newArr[i]) && i < newArr.length-1 && !control.includes(newArr[i+1])) {
        newArr[i] == controlNext[0] ? newArr.splice(i+1,1) : newArr.splice(i+1, 0, newArr[i+1]);
      }
      if (controlPrev.includes(newArr[i]) && i > 0 && !control.includes(newArr[i-1])) {
          if (newArr[i] == controlPrev[0]) {
            newArr.splice(i-1,1);
              i--;
          }
          if (newArr[i] == controlPrev[1]) {
            newArr.splice(i-1, 0, newArr[i-1]);
              i++;
          }
      }
  }
  return newArr.filter( newArr => !control.includes(newArr));

}

module.exports = {
  transform
};
