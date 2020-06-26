
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util"); 
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

var profilePic = ""

const writeFileAsync = util.promisify(fs.writeFile);



const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project and some installation steps?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage of this project?"
    },
    {
        type: "List",
        name: "Licenses",
        message: "What licenses, if any, did you use?",
        choices: ["MIT", "ISC", "None"]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Who were the contributors on this project?"
    },
    {
        type: "input",
        name: "Testing",
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
        
    },
      


];


function promptquestions(data){
        console.log(data)
        axios.get(`https://api.github.com/user/${data.githubusername}`).then(function(res){
            profilePic = res.data.avatar_url



        })
    }




// FUNCTION TO GENERATE PROPER FILETYPE ("README.md", md) //
// var newfile = "README.md"
// var md = generateMarkdown(data)

function writeToFile(newfile, md) {
}



// FUNCTION FOR USER PROMPTS? //
function init(){    
    inquirer.prompt(questions)
    .then(function(answers){
        // axios.get(`https://api.github.com/user/${answers.githubusername}`).then(function(res){
        //     profilePic = res.data.avatar_url



        // })
    }
  
    )}


// FUNCTION TO INITIALIZE USERPROMPT FUNCTION // 
init()
    
