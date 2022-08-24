// #### GETTING USER DATA FROM THESE PROMPTS ####
// file system
const fs = require("fs");
const inquirer = require("inquirer");

//prompting users for questions
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name (first last)?",
      name: "full-name",
    },
    {
      type: "input",
      message: "What state do you live in (abbreviation- e.g. MI)?",
      name: "state",
    },
    {
      type: "input",
      message: "Please write a short description of yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn profile URL?",
      name: "LinkedIn",
    },
    {
      type: "input",
      message: "What is your GitHub profile URL?",
      name: "GitHub",
    },
  ])
  .then((data) => {
    fs.writeFile("log.txt", JSON.stringify(data), (data) => {
      console.log("It worked");
    });
  });
