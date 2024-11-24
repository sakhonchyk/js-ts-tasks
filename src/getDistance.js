/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  let x = secondPoint.X - firstPoint.X;
  let y = secondPoint.Y - firstPoint.Y;

  let x2 = x * x;
  let y2 = y * y;

  let distance = Math.sqrt(x2 + y2);

  return parseFloat(distance.toFixed(2));
};
