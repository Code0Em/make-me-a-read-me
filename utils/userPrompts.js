// TASK 1: An array containing prompts for the user to answer (utilising inquirer package).
userPrompts = [ 
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
        // *CREDIT: Worked out validation code thanks to Geshan Manandhar (2023) A step-by-step guide to using Inquirer.js (https://geshan.com.np/blog/2023/03/inquirer-js/).
        validate: (resp) => {
            if (!resp.length) {
                return 'Please provide a title for your project.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
        validate: (resp) => {
            if (!resp.length) {
                return 'Please provide a description of your project.';
            }
            return true;
        }
    },
    {
        type: 'checkbox',
        name: 'build',
        message: 'Select the languages and technologies used to build your project:',
        choices: ['Bootstrap', 'CSS', 'HTML', 'Javascript', 'jQuery', 'Node.js', 'NPM', 'API(s)', 'Other(s)'],
        validate: (resp) => {
            if (!resp.length) {
                return `Please select at least one choice. If your language/technologies aren't listed, please select "Other(s)".`;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your project:',
        default: 'N/A',
        validate: (resp) => {
            if (resp.length < 3) {
                return 'Please provide installation instructions for your project, else enter "N/A".';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your project:',
        default: 'N/A',
        validate: (resp) => {
            if (resp.length < 3) {
                return 'Please provide usage instructions for your project, else enter "N/A".';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any credits (e.g. collaborators, third-party assets, tutorials followed):',
        default: 'N/A',
        validate: (resp) => {
            if (resp.length < 3) {
                return 'Please provide credits for your project, else enter "N/A".';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license that your project is distributed under:',
        choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines for how other developers can contribute to your project:',
        default: 'N/A',
        validate: (resp) => {
            if (resp.length < 3) {
                return 'Please provide contribution guidelines for your project, else enter "N/A".';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide any tests for your projects:',
        default: 'N/A',
        validate: (resp) => {
            if (resp.length < 3) {
                return 'Please provide testing information for your project, else enter "N/A".';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username to credit your project:',
        validate: (resp) => {
            if (!resp.length) {
                return 'Please provide your GitHub username.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email so others can contact you about your project:',
        validate: (resp) => {
            // *CREDIT: Regex/validation code adapted from SheCodes (no date) Form Validation for Emails using Regex and JavaScript (https://www.shecodes.io/athena/6092-form-validation-for-emails-using-regex-and-javascript).
            const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            if (!regex.test(resp)) {
                return 'Please enter a valid email.';
            }
            return true;
        }
    }
];

// TASK 2: Exports to main js file
module.exports = userPrompts;