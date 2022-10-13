// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.viewport("macbook-13");
    cy.visit("/");
    cy.contains("h1", "You did it!");
    cy.contains("[data-test-id=congrats]", "Congrats!");
  });
});
