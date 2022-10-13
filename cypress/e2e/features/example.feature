Feature: Home Page
  Scenario: visiting the home page
    Given I visit the home page
    Then I should see a 'Congrats' message

  @focus
  Scenario: navigating to the about page
    Given I am on the home page
    When I navigate to the about page
    Then I should see text 'This is an about page'