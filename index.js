// **TASKS**

// // *TASK 1: Create an array which holds prompts for the user to answer (answers will then be used to used to generate contents of README).
// // *TASK 2: Export/ import userPrompts.js to index.js (i.e. main js file).
// // *TASK 3: Create function to return user's answers to prompts, using inquirer.prompt().
// // *TASK 4: Create function to make the content of the readme, passing through the user's answers (from TASK 3).
// // *TASK 5: Export/ import makeReadme.js to index.js (i.e. main js file).
// // *TASK 6: Create function to create an output folder (for readme), using fs.mkdirSync(). Add try/catch blocks for error handling and add async to function (so it returns a promise and then we can use await on function call).
// *TASK 7: Import Node's util module and then create function to write the readme file, using fs.writeFile(). Wrap this in util.promisify() to convert fs.writeFile() (which is based on callback) into a promise-based function.
// *TASK 8: Create function to initialise the application. Add async to function (so returns promise) and try/catch blocks (to handle errors). Within try block: call promptUser function (from TASK 3) with await (so this waits for promise to be resolved before continuing); call the makeReadme function (from TASK 4), passing through the user's answers; call the newFolder function (from TASK 6) with await; call the writeFileAync function (from TASK 7) with await; log that the readme's been made. Within catch block: write error message to console.
// *TASK 9: function for license badges?
// *TASK 10: function for language badges?

// **IMPORTS**
// Imports Node's file system module
const fs = require("fs");
// Imports Node's path module
const path = require('path');
// Imports nmp Inquirer module
const inquirer = require("inquirer");
// Imports from makeReadme.js
const makeReadme = require("./utils/makeReadme");
// Imports from userPrompts.js
const userPrompts = require("./utils/userPrompts");

// **FUNCTIONS**
// Task 3: Prompts user and returns user's answers to the prompts.
const promptUser = () => {
  return inquirer.prompt(userPrompts)
};

// Task 6: Creates output folder (for readme).
const newFolder = async () => {
  // Sets name of the folder.
  const folderName = './output';
  try {
    // If a folder with this name doesn't (already) exist, run this codeblock.
    if (!fs.existsSync(folderName)) {
      // Create a new folder with this name.
      fs.mkdirSync(folderName);
    }
    // If an error is thrown in try block, "catch it" and run this code:
  } catch (err) {
    // Write the error to the console.
    console.error(err);
  }
}

// function to write README file
// function writeToFile(fileName, data) {
// }

// function call to initialize program
// init();
