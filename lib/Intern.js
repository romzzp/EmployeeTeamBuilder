const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school, role = "Intern") {
        super(id, name, email);
        this.role = role;
        this.school = school;
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;