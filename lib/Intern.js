const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.id = "Intern";
        this.school = school;
    }

    getRole() {
        return this.id;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;