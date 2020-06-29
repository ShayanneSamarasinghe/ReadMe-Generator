const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

var MITbadge = https://img.shields.io/badge/License-MIT-yellow.svg
var ISCbadge = https://img.shields.io/badge/License-ISC-blue.svg

var profilePic = "";

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
  },
  {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project and some installation steps?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the instructions for installation?"
},
  {
      type: "input",
      name: "Usage",
      message: "What is the usage of this project?"
  },
  {
      type: "list",
      name: "licenses",
      message: "What licenses, if any, did you use?",
      choices: ["MIT", "ISC", "None"]
    //  if(choices: === "MIT"){
    //     //  return urlllll --- MIT badge ////

    //  }else if(choices: === "ISC"){
    //     //  return urllllll --- ics badge //// 
    //  }else{
    //      return "No badges were selected"
    //  }
  },
  {
      type: "input",
      name: "contributors",
      message: "Who were the contributors on this project?"
  },
  {
      type: "input",
      name: "tests",
      message: "What are, if any, some of the frameworks you used for testing?"
  },
  {
      type: "input",
      name: "githubemail",
      message: "What is your github email?"
  },
  {
    type: "input",
    name: "githubusername",
    message: "What is your github username?",
    
    // validate: function (data) {
    //     console.log('validatine')
    //   axios
    //     .get(`https://api.github.com/user/${data.githubusername}`)
    //     .then(function (res) {
    //         console.log("made call")
    //       profilePic = res.data.avatar_url;
    //       if (profilePic) {
    //         return true;
    //       } else {
    //         return "Incorrect githubusername";
    //       }
    //     })
    //     .catch(function (err) {
    //       return "Incorrect githubusername";
    //     });
    // },
  },
];

// axios
// .get(`https://api.github.com/user/wesycool`)
// .then(function (res) {
//     console.log("made call")
//   profilePic = res.data.avatar_url;
//   if (profilePic) {
//     return true;
//   } else {
//     return "Incorrect githubusername";
//   }
// })
// .catch(function (err) {
//   return "Incorrect githubusername";
// });

function promptquestions(data) {
  console.log(data);
  axios
    .get(`https://api.github.com/user/${data.githubusername}`)
    .then(function (res) {
      profilePic = res.data.avatar_url;
      console.log(res)
      if (profilePic) {
        return true;
      } else {
        return "Incorrect githubusername";
      }
    })
    .catch(function (err) {
      return "Incorrect githubusername";
    });
}

// FUNCTION FOR USER PROMPTS? //
function init() {
  inquirer.prompt(questions).then(function (answers) {
    var newfile = "README.md";
    var md = generateMarkdown(answers);

    writeFileAsync(newfile, md);
  });
}

// FUNCTION TO INITIALIZE USERPROMPT FUNCTION //
init();


