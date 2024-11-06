/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    const lengthOfString = str.length;

    if (lengthOfString < symbolsCount || symbolsCount === 0) {
        return str;
    }

    const subStr = str.substring(lengthOfString - symbolsCount);

    return subStr + str + subStr;


};
