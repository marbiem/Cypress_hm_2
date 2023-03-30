export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }
  validateInputs() {
    cy.login("testowyqa@qa.team", "QA!automation-1");
  }
  validateLoginButton() {
    cy.get(".css-1jphuq5").click();
  }
}
