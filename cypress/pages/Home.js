export class Home {
  validateMenuButton() {
    cy.get(".css-7afvtf").click();
  }
  validateLogoutButton() {
    cy.get(":nth-child(7) > .css-bve2vl").click();
  }
}
