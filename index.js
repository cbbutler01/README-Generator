// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'what is your email address?',
    name: 'Email',
},
{
    type: 'input',
    message: 'How can people reach out to you for more information on your project?',
    name: 'Contact',
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
}, 
{
    type: 'input',
    message: 'What would you like to title your project?',
    name: 'Title',
},
{
    type: 'input',
    message: 'How would you describe your project?',
    name: 'Description',

},
{
    type: 'input',
    message: 'what are the instruction for others users to install your project?',
    name: 'InstallationInstructions',
},
{
    type: 'input',
    message: 'How should your project be used/What should it be used for?',
    name: 'UsageInformation',
},
{
    type: 'input',
    message: 'How could other users contribute to your project?',
    name: 'ContributionGuidlines',
},
{
    type: 'input',
    message: 'How should your project be tested for integrations?',
    name: 'TestInstructions',
},
{
    type: 'list',
    message: 'What license would you like to use for your project?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD3', 'None'],
},
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try{
    fs.writeFileSync(fileName, data);
    console.log(`Successfully created ${fileName}`);
    } catch (err) {
        console.error(`Error writing ${fileName}: ${err}`)
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('ReadMe.md', generateMarkdown(userAnswers))
    })
}

// Function call to initialize app
init();