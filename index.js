// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "what is your name?",
    "How old are you?",
    "Where are you from?",
    "What is your favorite color?",
    "What programming languages do you know?",

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    // Ask questions
    // installation instructions, usage information, contribution guidelines, and test instructions

    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title?"
            },
            {
                type: "input",
                name: "description",
                message: "What is the description?"
            },
            {
                type: "input",
                name: "installation",
                message: "What is the installation instructions?",
            },
            {
                type: "input",
                name: "usage",
                message: "What is the usage information?",
            },
            {
                type: "input",
                name: "contribution",
                message: "What is the contribution guidelines?",
            },
            {
                type: "input",
                name: "test",
                message: "What is the test instructions?",

                
            },
            {
                type: "input",
                name: "Email",
                message: "What is your email?",
            },
            {
                type: "input",
                name: "GitHub",
                message: "what is your GitHub?",

            }
        ])
        .then((answers) => {
            console.log(answers);

            const readme = `
# ${answers.title}
![caption](https://img.shields.io/badge/LICENSE-whatever-blue)

## Description
${answers.description}

## Installation Instructions
${answers.installation}

## Usage Information
${answers.usage}

## Contribution Guidelines
${answers.contribution}

## Test Instructions
${answers.test}


## Questions
- ${answers.Email}
- ${answers.GitHub}

      `

            console.log(readme)

            fs.writeFile("./README.md", readme, () => {
                console.log("README has been generated!")
            })
        })
}

// Function call to initialize app
init();
