/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
    start = Number(start);
    end = Number(end);

    const min = Math.min(start, end);
    const max = Math.max(start, end);

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};
