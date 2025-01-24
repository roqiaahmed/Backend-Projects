const { WeightUnits } = require('./unit.js');
class Weight {
  constructor(num, convertTo, convertFrom) {
    this.num = num;
    this.convertTo = convertTo;
    this.convertFrom = convertFrom;
  }

  convert() {
    const result =
      (this.num * WeightUnits[this.convertFrom]) / WeightUnits[this.convertTo];
    return (
      'Result of your conversion is: \n ' +
      this.num +
      ' ' +
      this.convertFrom +
      ' = ' +
      result +
      ' ' +
      this.convertTo
    );
  }
}
module.exports = Weight;
