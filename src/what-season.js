const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(newDate) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!'
  } else if(!(newDate instanceof Date) || Object.getOwnPropertyNames(newDate).length){
    throw new Error('Invalid date!');
  } else if(newDate instanceof Date) {
    let month = newDate.getMonth();
    if((month <=1) || month === 11) {
      return 'winter';
    }
    if(month <=4) {
      return 'spring'
    }
    if(month <=7) {
      return 'summer'
    }
    if(month<=10) {
      return 'autumn'
    }
  }
}

module.exports = {
  getSeason
};
