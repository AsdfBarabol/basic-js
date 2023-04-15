const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  /* let name = '';
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string') {
      name += arr[i].trim()[0];
    }
  }
  if(name.length < 1) {
    return false;
  }
  return name.toUpperCase().split('').sort().join(''); */
  if (!Array.isArray(arr)) return false;
  name = '';
  arr.forEach(s => typeof(s) == 'string' ? name += s.trim()[0] : name);
  return name ? name.toUpperCase().split('').sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
