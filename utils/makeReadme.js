//TASK 4: Creates the content of the readme (passing through user's answers to prompts).
const makeReadme = (userAnswers) => {
  return `# ${userAnswers.title}

  ## Contents

* [Description](#description)
* [Build](#build)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributions](#contributions)
* [Testing](#testing)
* [Contacts](#contacts)

## Description
${userAnswers.description}

## Build
The project was built with:

//!NEED TO WORK THIS OUT

 ## Installation
 ${userAnswers.installation}

## Usage
${userAnswers.usage}

## Credits
${userAnswers.credits}

## License
Distributed under:

//!NEED TO WORK THIS OUT

Select the badge to view more information about the license.

## Contributions
${userAnswers.contribution}

## Contacts

You can contact the developer on:

*GitHub: [${userAnswers.github}](https://github.com/${userAnswers.github})

*Email: [${userAnswers.github}'s email](mailto:${userAnswers.email})`
};

module.exports = makeReadme;
