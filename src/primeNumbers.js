/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(i) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  return (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }

    return result;
  };
};
