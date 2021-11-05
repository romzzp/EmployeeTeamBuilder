const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.id = "Manager";
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.id;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;