const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: function (input) {
          if (input.length > 3) {
            return 'Please enter up to three characters';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):',
        default: 'black',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):',
        default: 'black',
      },
    ]);
  }
  
  function generateSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <${shape} cx="150" cy="100" r="50" fill="none" stroke="${textColor}" stroke-width="3" />
      <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="80" fill="${textColor}">${text}</text>
    </svg>`;
    fs.writeFileSync('logo.svg', svgContent);
  }
  
  async function run() {
    try {
      const userInput = await promptUser();
      generateSVG(userInput);
      console.log('Generated logo.svg');
    } catch (error) {
      console.error(error);
    }
  }
  run();

  