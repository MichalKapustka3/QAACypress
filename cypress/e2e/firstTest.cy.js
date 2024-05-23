describe("Nasz pierwszy blok testów", () => {
  it("Test z wizytą w siedzibie LMS", () => {
    // cypress code
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Znajdź wejście z pocztą i wpisz email", () => {
    cy.get("#user_email").type("user888@gmail.com");
  });
});
