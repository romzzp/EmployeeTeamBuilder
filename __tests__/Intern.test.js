const Intern = require("../lib/Intern");

test("Should return the role of the Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Romal", 26, "intern@email.com", "UofT");
    expect(e.getRole()).toBe(testValue);
});

test("Should return the school of the Intern", () => {
    const testValue = "UCLA";
    const e = new Intern("Romal", 26, "intern@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
