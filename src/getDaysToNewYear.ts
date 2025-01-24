/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let date;

  if (typeof targetDate === 'string') {
    const dateArray = targetDate.split(".").map(Number);
    date = new Date(dateArray[2]!, dateArray[1]! - 1, dateArray[0]);
  } else {
    date = new Date(targetDate);
  }

  const nextYear = new Date(2024, 0, 1);
  const differenceBetweenYearsInMill = nextYear.getTime() - date.getTime();
  const millisecondsInDay = 1000 * 3600 * 24;

  return Math.floor(differenceBetweenYearsInMill / millisecondsInDay);
};
