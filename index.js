let axios = require("axios");
let inquirer = require("inquirer");
// let fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "name"
    },
    {
        input: "checkbox",
        message: "What is your favorite color?",
        choices: ["Red", "Green", "Blue", "Orange", "Yellow", "Black", "Pink", "Purple"],
        name: "colors"
    }
]).then(function (info) {
    axios.get("https://api.github.com/users/", + info.name )
    .then(function(response){
        console.log(response.location);
    });
});
        // fs.writeFile("user.txt", "### " + response.name + " is the github username" , function (err) {
        //     if (err) {
        //         return (console.log(err));
        //     }
        //     console.log("success!");
        // })
        