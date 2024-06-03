Feature: Product Search and Purchase on Militaria.pl

  Scenario: Successful search and purchase of a product
    Given the user is on the homepage of https://militaria.pl
    When the user searches for "noż survivalowy"
    Then the search results should display items related to "noż survivalowy"

    When the user selects the first product from the search results
    Then the product details page should be displayed

    When the user adds the product to the cart
    Then the cart should display the selected product

    When the user proceeds to the checkout
    Then the checkout page should be displayed

    When the user enters valid shipping and payment details
    And the user confirms the purchase
    Then the order confirmation page should be displayed
    And the user should receive an order confirmation email

  Scenario: Validate purchase details
    Given the user has successfully purchased a "noż survivalowy"
    When the user views the order history
    Then the order should be listed in the order history
    And the order details should include "noż survivalowy" with correct price and quantity
