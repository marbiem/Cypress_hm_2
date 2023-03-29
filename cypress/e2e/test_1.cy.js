/// <reference types="cypress" />

describe("Login on website LMS", () => {
  it("Login without custom method", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.get(".css-1jphuq5").click();
    cy.get(".css-7afvtf").click();
    cy.get(":nth-child(9) > .css-bve2vl").click();
  });
});
