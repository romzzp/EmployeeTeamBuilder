const Manager = require("../lib/Manager");

test('Should retrn with the role of the Manager', () => {
    const testValue = "Manager";
    const e = new Manager("Romal", 26, "manager@email.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Should return with the office number of the manager", () => {
    const testValue = 100;
    const e = new Manager("Romal", 26, "manager@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
