// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const options = ["MIT", "Apache", "Creative Commons", "BSD-3"];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide a short installation guide (npm init).",
  },
  {
    type: "input",
    name: "installation1",
    message: "Please provide a short installation guide (npm i).",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide a short usage guide.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide a short paragraph of contributions.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select an option",
    choices: options,
    pageSize: options.length,
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${fileName} created!`);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { title, description, installation, installation1, usage, contributing, license, github, email } = answers;
    const readmeContent = `# ${title}\n
## Table Of Contents\n\n
[Description](#description)\n\n
[Installation](#installation)\n\n
[Usage](#usage)\n\n
[Contributing](#contributing)\n\n
[Questions](#questions)\n\n
# Description\n${description}\n
## Installation Guide\n
Get package.json\n
    ${installation}\n
Install dependencies\n
    ${installation1}\n
## Usage\n${usage}\n
## Contributing\n${contributing}\n
## Licensing\n${license}\n
## Questions\n
${github}\n\n
${email}\n
`;

    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
