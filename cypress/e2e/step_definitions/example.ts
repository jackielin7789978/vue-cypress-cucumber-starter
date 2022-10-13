import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the home page", function () {
  cy.visit("/");
});

Then("I should see a 'Congrats' message", () => {
  cy.contains("[data-test-id=congrats]", "Congrats!");
});

Given("I am on the home page", () => {
  cy.visit("/");
});

When("I navigate to the about page", () => {
  cy.get("[data-test-id=about]").click();
});

Then("I should see text 'This is an about page'", () => {
  cy.contains("h1", "This is an about page");
});
