const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given("that the user is on the https://pl.coccodrillo.eu/ website", () => {
  cy.visit("/");
});

When(
  "the user enters the search term {string} in the search field",
  (searchTerm) => {
    cy.get("#search_input").type(searchTerm);
  }
);

Then("the system displays a list of products matching the search term", () => {
  cy.get(".product-list").should("be.visible");
});

When("the user selects the product {string}", (productName) => {
  cy.contains(productName).click();
});

And("the user adds the product to the cart", () => {
  cy.get(".add-to-cart-button").click();
});

Then(
  "the system displays a message confirming that the product has been added to the cart",
  () => {
    cy.get(".notification-success").should("be.visible");
  }
);

When('the user clicks on the "Cart" button', () => {
  cy.get(".cart-contents-button").click();
});

Then("the system displays the contents of the cart", () => {
  cy.get(".cart-contents").should("be.visible");
});

When('the user clicks on the "Proceed to checkout" button', () => {
  cy.get(".checkout-button").click();
});

And("the user enters the required information in the checkout form", () => {
  // Fill in the checkout form
  cy.get("#billing_first_name").type("John");
  cy.get("#billing_last_name").type("Doe");
  cy.get("#billing_address_1").type("123 Main St");
  cy.get("#billing_city").type("Anytown");
  cy.get("#billing_postcode").type("12345");
  cy.get("#billing_phone").type("555-1234");
  cy.get("#billing_email").type("john.doe@example.com");
});

And("the user selects a payment method", () => {
  // Select a payment method
  cy.get("#payment_method_cod").check();
});

And('the user clicks on the "Place Order" button', () => {
  cy.get("#place_order").click();
});

Then("the system displays a confirmation of the order", () => {
  cy.get(".order-received").should("be.visible");
});

When("the user checks their email", () => {
  // This step is a manual step that the user would need to perform outside of the tests
});

Then("the user looks for an email from coccodrillo.eu", () => {
  // This step is a manual step that the user would need to perform outside of the tests
});

When("the user opens the email and checks its contents", () => {
  // This step is a manual step that the user would need to perform outside of the tests
});

Then(
  "the user verifies that the order details in the email match the order placed",
  () => {
    // This step is a manual step that the user would need to perform outside of the tests
  }
);

And("the user checks that the order amount is correct", () => {
  // This step is a manual step that the user would need to perform outside of the tests
});
