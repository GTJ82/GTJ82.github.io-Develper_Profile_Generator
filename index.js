let axios = require("axios");
let inquirer = require("inquirer");
let fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "name"
    },
    {
        type: "checkbox",
        message: "What is your favorite color?",
        choices: ["Red", "Green", "Blue", "Orange", "Yellow", "Black", "Pink", "Purple"],
        name: "colors"
    }
])

    .then(function (info) {
        axios.get("https://api.github.com/users/" + info.name)
            .then(function (response) {
                console.log(response.data);

                let color = info.colors
                let name = response.data.name
                let image = response.data.avatar_url
                let bio = response.data.bio
                let comp = response.data.company
                let repo = response.data.repos_url
                let pubRepo = response.data.public_repos
                let follow = response.data.followers
                let userFollow = response.data.following
                let locate = response.data.location



                fs.writeFile("user.md", "# " + "<font color='" + color + "'>" + name + "</font>" + "\n" + "![userImage](" + image + ")" + "\n" + "### Bio: " + bio + "\n" + "### Company: " + comp + "\n" + "### Repo URL: " + repo + "\n" + "### Public Repos: " + pubRepo + "\n" + "### Followers: " + follow + "\n" + "### Following: " + userFollow + "\n" + "### Location: " + locate, function (err) {
                    if (err) {
                        return (console.log(err));
                    }

                    console.log("success!")

                });

            });

    });















