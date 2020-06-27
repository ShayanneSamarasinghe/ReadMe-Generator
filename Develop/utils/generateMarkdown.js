function generateMarkdown(data) {
  return ( `
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
  ${data.contributors}
  #Tests
  ${data.tests}
  #GitHub Info
  ${data.githubemail}
  ${data.githubusername}
  ${data.profilepicture}

  #Badge
  ${data.badge}



`)
   
}

module.exports = generateMarkdown;
