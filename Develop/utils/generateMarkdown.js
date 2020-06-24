function generateMarkdown(data) {
  return 
  `
# ${data.title}
${data.description}
#Table of Contents 
${data.toc}
#Table of Contents
${data.intallation}
#Usage
${data.usage}
#License
${data.license}
#Contributors
${data.contributing}
#Tests
${data.tests}
#GitHub Info
${data.profilepicture}
#${data.githubemail}

`;
}

module.exports = generateMarkdown;
