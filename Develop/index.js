
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util"); 
const axios = require("axios");

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
        message: "Description?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage of this project?"
    },
    {
        type: "List",
        name: "Licenses",
        message: "Licenses?",
        choices: ["MIT", "ISC"]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Contributors?"
    },
    {
        type: "input",
        name: "Testing",
        message: "What are, if any, some of the frameworks you used for testing?"
    },
    {
        type: "input",
        name: "githubemail",
        message: "github email?"
    },
    {
        type: "input",
        name: "githubusername",
        message: "What is your github username?",
        validate: function(data){
            axios.get(`https://api.github.com/user/${data}`).then(function(res){
                if(res.data.login){
                    console.log(res);
                    profilePic = res.data.avatar_url;
                    return true

                }else{
                    return "Username not found"

                }
                
            }).catch(function(err){
                return "Username not found"
            })
        }
    },

      

      


];

axios.get(`https://api.github.com/users/ShayanneSamarasinghe`).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err)
})


// FUNCTION TO GENERATE PROPER FILETYPE? ("README.md", md) 

function writeToFile("README.md", data) {
}



// FUNCTION FOR USER PROMPTS? //
function init(){    
    return inquirer.prompt(questions)
  
}


FUNCTION TO INITIALIZE USERPROMPT FUNCTION // 
init();
