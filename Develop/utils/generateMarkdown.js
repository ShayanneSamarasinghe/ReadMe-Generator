function generateMarkdown(data) {
  return 
  `
# ${data.title}
${data.description}
#Table of Contents 

#Contents
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
${data.githubemail}
${data.githubusername}
${data.profilepicture}



`;
}

module.exports = generateMarkdown;
