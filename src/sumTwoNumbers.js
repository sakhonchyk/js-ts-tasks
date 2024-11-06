/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
    const number1 = Number(firstNumber.toString().replace(/\s+/g, ''));
    const number2 = Number(secondNumber.toString().replace(/\s+/g, ''));

    return number1 + number2;
};
