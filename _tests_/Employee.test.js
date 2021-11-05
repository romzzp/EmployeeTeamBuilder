const Employee = require("../lib/Employee");

test("This should return an object with name, id and email", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Should get name of the Employee()", () => {
    const testValue = "Romal";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Should get id of the Employee", () => {
    const testValue = 26;
    const e = new Employee("Romal", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Should get email of the Employee()", () => {
    const testValue = "romal@email.com";
    const e = new Employee("Romal", 26, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Should get the role of the employee", () => {
    const testValue = "Employee";
    const e = new Employee("Romal", 26, "romal@email.com");
    expect(e.getRole()).toBe(testValue);
});