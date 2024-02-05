// **TASKS**

// *TASK 1: Create an array which holds prompts for the user to answer (answers will then be used to used to generate contents of README).
// *TASK 2: Export/ import userPrompts.js to index.js (i.e. main js file).
// *TASK 3: Create function to return user's answers to prompts, using inquirer.prompt().
// *TASK 4: Create function to make the content of the readme, passing through the user's answers (from TASK 3).
// *TASK 5: Export/ import makeReadme.js to index.js (i.e. main js file).
// *TASK 6: Create function to create an output folder (for readme), using fs.mkdirSync(). Add try/catch blocks for error handling and add async to function (so it returns a promise and then we can use await on function call).
// *TASK 7: Import Node's util module and then create function to write the readme file, using fs.writeFile(). Wrap this in util.promisify() to convert fs.writeFile() (which is based on callback) into a promise-based function.
// *TASK 8: Create function to initialise the application. Add async to function (so returns promise) and try/catch blocks (to handle errors). Within try block: call promptUser function (from TASK 3) with await (so this waits for promise to be resolved before continuing); call the makeReadme function (from TASK 4), passing through the user's answers; call the newFolder function (from TASK 6) with await; call the writeFileAync function (from TASK 7) with await; log that the readme's been made. Within catch block: write error message to console.
// *TASK 9: Create a function with a switch statement, where each case evaluates whether the userAnswers matches the license and if it does, returns the markdown code for that license badge. Run this function within the License section of the makeReadme function.
// !TASK 10: function for language badges?
// *TASK 11: Call initApp function (from TASK 8).

// **IMPORTS**
// Imports Node's file system module
const fs = require("fs");
// Imports Node's path module
const path = require('path');
// Imports Node's util module
const util = require('util');
// Imports nmp Inquirer module
const inquirer = require("inquirer");
// Imports from makeReadme.js
const makeReadme = require("./utils/makeReadme");
// Imports from userPrompts.js
const userPrompts = require("./utils/userPrompts");

// **FUNCTIONS**
// Task 3: Prompts user to answer prompts from userPrompts array, and returns promise (which resolves with object containing user's answers) (to be used as content for the readme).
const promptUser = () => {
  return inquirer.prompt(userPrompts)
};

// Task 6: Creates output folder (for readme).
// *CREDIT: Function adapted from Node.js (no date) Working with folders in Node.js (https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs).
const newFolder = async () => {
  // Sets the name of the folder.
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

// Task 7: Writes readme file, util.promisify() converts fs.writeFile() into promise-based function.
// *CREDIT: Thanks to Mastering JS (2020) The `util.promisify()` Function in Node.js (https://masteringjs.io/tutorials/node/promisify) for developing coder's knowledge of these functions.
const writeFileAsync = util.promisify(fs.writeFile);

// Task 8: Initialises the application.
const initApp = async () => {
  try {
    // Calls promptUser() function, but “await” pauses execution and waits for promptUser() function to finish before continuing. When it’s finished and returns a value, that value is assigned to the userAnswers variable.
    // *CREDIT: Coder’s understanding of await keyword developed thanks to Xpert Learning Assistant’s (2024) answer to “explain this: const userAnswers = await promptUser();”.
    const userAnswers = await promptUser();

    // Calls makeReadme() function, passing through userAnswers as argument (i.e. returned value from promptUser() function). Assigns the returned value to readmeContent variable.
    const readmeContent = makeReadme(userAnswers);

    // Calls newfolder() function, but waits for this function to finish before continuing.
    await newFolder();

    // Calls writeFileAsync() function, which writes readmeContent to file named "readme.md" in "output" folder; but waits for this function to finish before continuing.
    await writeFileAsync('output/readme.md', readmeContent);

    // Writes below message to console.
    console.log('Your Readme has been made. Check the Output directory!');

    // If an error is thrown in try block, "catch it" and run this code:
  } catch (err) {
    // Writes the error to the console.
    console.error(err);
  }
};

// **FUNCTIONS CALLS**
// Task 11: Calls initApp() function.
initApp();
