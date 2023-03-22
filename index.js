// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
    message: "Please provide a short installation guide.",
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
    const { title, description, installation, usage, contributing, github, email } = answers;
    const readmeContent = `# ${title}\n
## Table Of Contents\n\n
[Description](#description)\n\n
[Installation](#installation)\n\n
[Usage](#usage)\n\n
[Contributing](#contributing)\n\n
[Questions](#questions)\n\n
# Description\n${description}\n
## Installation\n${installation}\n
## Usage\n${usage}\n
## Contributing\n${contributing}\n
## Questions\n
${github}\n\n
${email}\n
`;

    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
