const { TemperatureUnits } = require('./unit.js');
class Temperature {
  constructor(num, convertTo, convertFrom) {
    this.num = num;
    this.convertTo = convertTo;
    this.convertFrom = convertFrom;
  }

  convert() {
    let result;
    switch (this.convertTo) {
      case 'C':
        result = this.convertToC();
        break;
      case 'F':
        result = this.convertToF();
        break;
      case 'K':
        result = this.convertToK();
        break;
      default:
        break;
    }
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

  convertToC() {
    switch (this.convertFrom) {
      case 'F':
        return ((this.num - 32) * 5) / 9;
      case 'K':
        return this.num - 273.15;
      default:
        return this.num;
    }
  }

  convertToF() {
    switch (this.convertFrom) {
      case 'C':
        return (this.num * 9) / 5 + 32;
      case 'K':
        return ((this.num - 273.15) * 9) / 5 + 32;
      default:
        return this.num;
    }
  }

  convertToK() {
    switch (this.convertFrom) {
      case 'C':
        return this.num + 273.15;
      case 'F':
        return ((this.num - 32) * 5) / 9 + 273.15;
      default:
        return this.num;
    }
  }
}
module.exports = Temperature;
