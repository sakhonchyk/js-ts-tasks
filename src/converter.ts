/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  const converter = map.get(from) as Converter;
  return converter.convert(value, to);

};

class TemperatureConverter implements Converter {
  private KELVIN = 'K';
  private ABSOLUTE_ZERO = 273.15;

  convert(value: number, to: string): number {
    if (to === this.KELVIN) {
      return Number((value + this.ABSOLUTE_ZERO).toFixed(2));
    }

    return Number((value - this.ABSOLUTE_ZERO).toFixed(2));
  }
}

class DistanceConverter implements Converter {
  private METER = 'm';
  private METERS_IN_ONE_MILE = 1609.34;

  convert(value: number, to: string): number {
    if (to === this.METER) {
      return Number((value * this.METERS_IN_ONE_MILE).toFixed(2));
    }

    return Number((value / this.METERS_IN_ONE_MILE).toFixed(2));
  }

}

class WeightConverter implements Converter {
  private GRAM = 'gr';
  private GRAMS_IN_ONE_POUND = 453.592;

  convert(value: number, to: string): number {
    if (to === this.GRAM) {
      return Number((value * this.GRAMS_IN_ONE_POUND).toFixed(2));
    }

    return Number((value / this.GRAMS_IN_ONE_POUND).toFixed(2));
  }
}

interface Converter {
  convert(value: number, to: string): number;
}

const map = new Map<string, Converter>([
  ['C', new TemperatureConverter()],
  ['K', new TemperatureConverter()],
  ['m', new DistanceConverter()],
  ['mi', new DistanceConverter()],
  ['gr', new WeightConverter()],
  ['pound', new WeightConverter()],
]);
