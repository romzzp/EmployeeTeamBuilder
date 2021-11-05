const Engineer = require("../lib/Engineer");

test("Should retrun the role of the Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Romal", 26, "engineer@email.com", "EngGithub");
    expect(e.getRole()).toBe(testValue);
});

test("Should return the github username of the engineer", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Romal", 26, "engineer@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
