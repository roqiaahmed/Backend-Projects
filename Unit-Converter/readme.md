# Unit Converter

simple web app that can convert between different units of measurement. It can convert units of length, weight and temperature. The user can input a value and select the units to convert from and to. The application will then display the converted value.

# Setup Instructions

1. **Clone the Repository**:

```bash
     git clone https://github.com/roqiaahmed/Backend-Projects.git
```

2. **Install Dependencies**:

```bash
   cd Unit-Converter
   npm install
```

3. **Run the Server**:

```bash
   npm start
```

4. **test in postman**:

- url: POST http://localhost:3000/convert

```bash
    {
    "unit": "temperature",
    "number": 9,
    "convertFrom": "C",
    "convertTo": "F"
    }

    the result will be :
      Result of your conversion is:
      9 C = 48.2 F
```
