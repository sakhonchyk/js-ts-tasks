/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  if (typeof word === 'number') {
    const decimalNumeralCount = 10;
    const wordString = word.toString();
    const numberSet = new Set(wordString.split(''));

    return numberSet.size === decimalNumeralCount;

  }

  const countLetterAlphabet = 26;
  const removeCharacters = word.replace(/[^a-zA-Z]/g, '');
  const wordSet = new Set(removeCharacters.split(''));

  return wordSet.size === countLetterAlphabet + 1;

};
