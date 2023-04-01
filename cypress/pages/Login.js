export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }
  fillLoginForm() {
    cy.login("testowyqa@qa.team", "QA!automation-1");
  }
  clickLoginButton() {
    cy.get(".css-1jphuq5").click();
  }
}
