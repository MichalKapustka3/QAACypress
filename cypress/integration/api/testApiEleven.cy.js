// Test: Odpowiedź serwera powinna mieć kod 200
describe("Odpowiedź serwera powinna mieć kod 200", () => {
  it("powinna zwrócić kod odpowiedzi 200", () => {
    // Wysłanie zapytania GET na stronę główną
    cy.request("https://httpbin.org").then((response) => {
      const status = response.status;

      // Asercja: Kod odpowiedzi powinien być równy 200
      expect(status).to.eq(200);
    });
  });
});
