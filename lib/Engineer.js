const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(id, name, email);
        this.id = "Engineer";
        this.github = github;
    }
    getRole() {
        return this.id;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;