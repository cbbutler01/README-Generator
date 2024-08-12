// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  }
  return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return ""
  }
  return `[License](https://opensource.org/licenses/${license})`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "This project is not licensed.";
  }
  renderLicenseLink()
  return `Licensed under [${license}](https://opensource.org/licenses/${license}) license.`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.Title}

  ## Description
  ${data.Description}
  
  ## Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contributing](#contributing)
    -[Tests](#tests)
    -[Questions](#questions)
    -[License](#license)

  ## Installation
  ${data.InstallationInstructions}

  ## Usage
  ${data.UsageInformation}

  ## Contributing
  ${data.ContributionGuidlines}

  ## Tests
  ${data.TestInstructions}

  ## Questions
  For any questions about the project, contact [${data.username}](https://github.com/${data.username}) or Email me at ${data.Email}.

  ## License
  ${licenseBadge}
  ${licenseSection}
`;
}

module.exports = generateMarkdown;
