const { LengthUnits } = require('./unit.js');
class Length {
  constructor(num, convertTo, convertFrom) {
    this.num = num;
    this.convertTo = convertTo;
    this.convertFrom = convertFrom;
  }

  convert() {
    const result =
      (this.num * LengthUnits[this.convertFrom]) / LengthUnits[this.convertTo];
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
module.exports = Length;
