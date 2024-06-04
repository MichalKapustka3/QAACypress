describe("Login and Logout Test", () => {
  const email = "user888@gmail.com";
  const password = "1234567890";

  it("should login and logout successfully", () => {
    // Otwórz stronę logowania
    cy.visit("https://www.edu.goit.global/account/login");

    // Użyj polecenia logowania
    cy.login(email, password);

    // Opcjonalnie poczekaj 2 sekundy na załadowanie strony po zalogowaniu
    cy.wait(2000);

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
