Feature: Searching for and purchasing a product on https://pl.coccodrillo.eu/

  Background:
    Given that the user is on the https://pl.coccodrillo.eu/ website

  Scenario: Searching for a product and adding it to the cart
    When the user enters the search term "kids' jacket" in the search field
    Then the system displays a list of products matching the search term
    When the user selects the product "Winter jacket with hood"
    And the user adds the product to the cart
    Then the system displays a message confirming that the product has been added to the cart

  Scenario: Proceeding to the cart and placing an order
    When the user clicks on the "Cart" button
    Then the system displays the contents of the cart
    When the user clicks on the "Proceed to checkout" button
    And the user enters the required information in the checkout form
    And the user selects a payment method
    And the user clicks on the "Place Order" button
    Then the system displays a confirmation of the order

  Scenario: Validating the order
    When the user checks their email
    Then the user looks for an email from coccodrillo.eu
    When the user opens the email and checks its contents
    Then the user verifies that the order details in the email match the order placed
    And the user checks that the order amount is correct
