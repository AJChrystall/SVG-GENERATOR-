const fs = require('fs');

test('checks for file named logo.svg', () => {
  const userInput = {
    text: 'ABC',
    textColor: 'black',
    shape: 'circle',
    shapeColor: 'red',
  };
  const fileExists = fs.existsSync('./logo.svg');
  expect(fileExists).toBe(true);
});
