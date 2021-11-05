const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role = "Engineer") {
        super(name, id, email);
        this.role = role;
        this.github = github;
    }
    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;