/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
    let sum = 0;
    let str = Math.abs(n).toString();

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return sum;
};
