const fs = require('fs');
const { generateSVG } = require('./index');


test('generates an SVG file named logo.svg', () => {
    const userInput = {
      text: 'ABC',
      textColor: 'black',
      shape: 'circle',
      shapeColor: 'red',
    };
    generateSVG(userInput);
    const fileExists = fs.existsSync('./logo.svg');
    expect(fileExists).toBe(true);
  });
  