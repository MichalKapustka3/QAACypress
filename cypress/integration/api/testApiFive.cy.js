// Test 5: Zapytanie DELETE z parametrami
describe("Zapytanie DELETE z parametrami", () => {
  it("powinno wysłać zapytanie DELETE z parametrami", () => {
    const params = {
      key: "value",
    };

    // Wysłanie zapytania DELETE z parametrami
    cy.request({
      method: "DELETE",
      url: "https://httpbin.org/delete",
      qs: params,
    }).then((response) => {
      // Asercje na odpowiedzi
      expect(response.status).to.eq(200);
      expect(response.headers).to.exist;
      expect(response.body).to.not.be.empty;
    });
  });
});
