/// <reference types="cypress" />

describe("Login on website LMS", () => {
  it("Login with custom method", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("testowyqa@qa.team", "QA!automation-1");
    cy.get(".css-1jphuq5").click();
    cy.get(".css-7afvtf").click();
    cy.get(":nth-child(7) > .css-bve2vl").click();
  });
});
