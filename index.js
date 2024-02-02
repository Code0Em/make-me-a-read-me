// **TASKS**

// *TASK 1: Create an array which holds prompts for the user to answer (answers will then be used to used to generate contents of README).

// *TASK 2: Export/ import userPrompts.js to index.js (i.e. main js file).

//*TASK 3: Create function to return user's answers to prompts.

//*TASK 4: Create function to make the content of the readme, passing through user's answers to prompts.

// **IMPORTS**
// Imports Node's file system module
const fs = require("fs");
// Imports Node's path module
const path = require('path');
// Imports nmp Inquirer module
const inquirer = require("inquirer");
// Imports from generateMarkdown.js
const makeReadme = require("./utils/makeReadme");
// Imports from userInput.js
const userPrompts = require("./utils/userPrompts");

// **FUNCTIONS**
// Task 3: Prompts user and returns user's answers to the prompts.
const promptUser = () => {
    return inquirer.prompt(userPrompts).then((userAnswers) => {
        // !TESTING
        console.log("working")
        makeReadme(userAnswers);
    })
};

// Calls function to prompt user.
promptUser();


// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
