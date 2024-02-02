// **TASKS**

// *TASK 1: Create an array which holds prompts for the user to answer (answers will then be used to used to generate contents of README).

// *TASK 2: Export/ import userInput file to main js file.

// **IMPORTS**
// Imports Node's file system module

// **IMPORTS**
// Imports Node's file system module
const fs = require("fs");
// Imports Node's path module
const path = require('path');
// Imports nmp Inquirer module
const inquirer = require("inquirer");
// Imports from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");
// Imports from userInput.js
const userInput = require("./utils/userPrompts");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
