const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/render");

const emailValidate = require("email-validator");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "Employee.html");

const team = [];

function buildTeam() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Employee?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the Employee?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the type of the Employee?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(function (empInfo) {
        this.name = empInfo.name;
        this.id = empInfo.id;
        this.role = empInfo.role;
    }).then(function () {
        email();
        function email() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "email",
                    message: "What is the Email id of the Employee?"
                }
            ]).then(function (empEmail) {
                this.email = empEmail.email;
                if (emailValidate.validate(this.email)) {
                    this.email = empEmail.email;
                    if (this.role === "Manager") {
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "officeNumber",
                                message: "What is the office number of the Manager?"
                            }
                        ]).then(function (managerNumber) {
                            this.officeNumber = managerNumber.officeNumber;
                            const manager = new Manager(this.name, this.id, this.email, this.officeNumber);
                            console.log(manager);
                            console.log(this.name);
                            console.log(this.id);
                            console.log(this.email);
                            console.log(this.role);
                            console.log(this.officeNumber);

                            team.push(manager);
                        }).then(function () {
                            addMoreEmp();
                        })
                    }
                    else if (this.role === "Engineer") {
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "github",
                                message: "What is the Github username of the Employee?"
                            }
                        ]).then(function (gitHub) {
                            this.github = gitHub.github;
                            const engineer = new Engineer(this.name, this.id, this.email, this.github);
                            console.log(this.name);
                            console.log(this.id);
                            console.log(this.email);
                            console.log(this.role);
                            console.log(this.github);

                            team.push(engineer);
                        }).then(function () {
                            addMoreEmp();
                        })
                    }
                    else {
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "school",
                                message: "Which school does the Intern go to?"
                            }
                        ]).then(function (school) {
                            this.school = school.school;
                            console.log(this.school);
                            const intern = new Intern(this.name, this.id, this.email, this.school);

                            team.push(intern);
                        }).then(function () {
                            addMoreEmp();
                        })
                    }
                }
                else {
                    console.log("Please enter a valid Email Address");
                    email();
                }
            })
        }
    })
}

function addMoreEmp() {
    inquirer.prompt([
        {
            type: "list",
            name: "continue",
            message: "Would you like to add more Employees to your Team?",
            choices: ["yes", 'no']
        }
    ]).then(function (addEmp) {
        if (addEmp.continue === "yes") {
            buildTeam();
        }
        else {
            buildTeamPortfolio();
            return "Your Team includes: " + JSON.stringify(team);
        }
    })
}

function buildTeamPortfolio() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, render(team), "utf8", function (error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log("Your team is created successfully!");
    })

}

buildTeam();