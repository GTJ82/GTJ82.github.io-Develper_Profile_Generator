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
        input: "checkbox",
        message: "What is your favorite color?",
        choices: ["Red", "Green", "Blue", "Orange", "Yellow", "Black", "Pink", "Purple"],
        name: "colors"
    }
])

    .then(function (info) {
        axios.get("https://api.github.com/users/" + info.name)
            .then(function (response) {
                console.log(response.data);

                let name = response.data.name


                fs.writeFile("user.md", "# " + name, function (err) {
                    if (err) {
                        return (console.log(err));
                    }

                    // console.log("yay!");

                });

            })
            .then(function (response) {
                axios.get("https://api.github.com/users/" + info.name)
                    .then(function (response) {
                        console.log(response.data);

                        let image = response.data.avatar_url

                        fs.appendFile("user.md", "\n" + "![userImage](" + image + ")", function (err) {

                            if (err) {
                                return (console.log(err));
                            }

                            // console.log("Success!");

                        });
                    });

            })

            // .then(function (response) {
            //     axios.get("https://api.github.com/users/" + info.name)
            //         .then(function (response) {
            //             console.log(response.data);

            //             let bio = response.data.bio


            //             fs.writeFile("user.md", "\n", "### Bio: " + bio , function (err) {
            //                 if (err) {
            //                     return (console.log(err));
            //                 }

            //                 // console.log("yay!");

            //             });

            //         });

            // })

            .then(function (response) {
                axios.get("https://api.github.com/users/" + info.name)
                    .then(function (response) {
                        console.log(response.data);

                        let comp = response.data.company

                        fs.appendFile("user.md", "\n" + "### Company: " + comp , function (err) {

                            if (err) {
                                return (console.log(err));
                            }

                            // console.log("Success!");

                        });
                    });

            })

            .then(function (response) {
                axios.get("https://api.github.com/users/" + info.name)
                    .then(function (response) {
                        console.log(response.data);

                        let repo = response.data.repos_url

                        fs.appendFile("user.md", "\n" + "### Repo URL: " + repo , function (err) {

                            if (err) {
                                return (console.log(err));
                            }

                            // console.log("Success!");

                        });
                    });

            })

            .then(function (response) {
                axios.get("https://api.github.com/users/" + info.name)
                    .then(function (response) {
                        console.log(response.data);

                        let pubRepo = response.data.public_repos

                        fs.appendFile("user.md", "\n" + "### Public Repos: " + pubRepo , function (err) {

                            if (err) {
                                return (console.log(err));
                            }

                            console.log("Success!");

                        });
                    });

            })

            

            


        });
