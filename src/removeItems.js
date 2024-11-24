/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof value === 'object') {
      if (isObjectsNotEquals(arr[i], value)) {
        result.push(arr[i]);
      }
    } else if (arr[i] !== value) {
      result.push(arr[i]);
    }
  }

  return result;
};

function isObjectsNotEquals(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return true;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return true;
    }
  }

  return false;
}
