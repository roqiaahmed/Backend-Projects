const express = require('express');
const Weight = require('./Weight');
const Temperature = require('./Temperature');
const Length = require('./length');

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World! it is a unit converter');
});
app.post('/convert', (req, res) => {
  const { unit, convertTo, convertFrom, number } = req.body;
  let result;

  switch (unit) {
    case 'weight':
      const weight = new Weight(Number(number), convertTo, convertFrom);
      result = weight.convert();
      break;

    case 'temperature':
      const temperature = new Temperature(
        Number(number),
        convertTo,
        convertFrom
      );
      result = temperature.convert();
      break;

    case 'length':
      const length = new Length(Number(number), convertTo, convertFrom);
      result = length.convert();
      break;

    default:
      result = 'Invalid unit';
  }
  res.send(result);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
