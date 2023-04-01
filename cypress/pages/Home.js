export class Home {
  clickMenuButton() {
    cy.get(".css-7afvtf").click();
  }
  clickLogoutButton() {
    cy.get(":nth-child(7) > .css-bve2vl").click();
  }
}
