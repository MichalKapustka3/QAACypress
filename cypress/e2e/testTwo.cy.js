describe("Login and Logout Test 2", () => {
  const email = "testowyqa@qa.team";
  const password = "QA!automation-1";

  it("should login and logout successfully with testowyqa@qa.team", () => {
    // Otwórz stronę logowania
    cy.visit("https://www.edu.goit.global/account/login");

    // Użyj polecenia logowania
    cy.login(email, password);

    // Poczekaj na załadowanie przycisku w prawym górnym rogu
    cy.get("#open-navigation-menu-mobile", { timeout: 10000 })
      .should("be.visible")
      .click();

    // Znajdź przycisk "Log out" w menu i kliknij na niego
    cy.contains("Log out", { timeout: 10000 }).should("be.visible").click();

    // Upewnij się, że wróciłeś na stronę logowania
    cy.url().should("include", "/account/login");
  });
});
