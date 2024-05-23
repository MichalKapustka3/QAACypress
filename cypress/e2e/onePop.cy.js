import LoginPage from "../pages/Login";
import HomePage from "../pages/HomePage";

describe("Login and Logout Tests", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it("should login and logout successfully with user888@gmail.com", () => {
    const email = "user888@gmail.com";
    const password = "1234567890";

    // Użyj polecenia logowania
    cy.login(email, password);

    // Opcjonalnie poczekaj 2 sekundy na załadowanie strony po zalogowaniu
    cy.wait(2000);

    // Poczekaj na załadowanie przycisku w prawym górnym rogu
    homePage.openNavigationMenu();

    // Znajdź przycisk "Log out" w menu i kliknij na niego
    homePage.logout();

    // Upewnij się, że wróciłeś na stronę logowania
    cy.url().should("include", "/account/login");
  });

  it("should login and logout successfully with testowyqa@qa.team", () => {
    const email = "testowyqa@qa.team";
    const password = "QA!automation-1";

    // Użyj polecenia logowania
    cy.login(email, password);

    // Opcjonalnie poczekaj 2 sekundy na załadowanie strony po zalogowaniu
    cy.wait(2000);

    // Poczekaj na załadowanie przycisku w prawym górnym rogu
    homePage.openNavigationMenu();

    // Znajdź przycisk "Log out" w menu i kliknij na niego
    homePage.logout();

    // Upewnij się, że wróciłeś na stronę logowania
    cy.url().should("include", "/account/login");
  });
});
