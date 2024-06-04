// Test 3: Zapytanie PUT z losowymi parametrami zapytania
describe("Zapytanie PUT", () => {
  it("powinno wysłać zapytanie PUT z losowymi parametrami zapytania", () => {
    const queryParams = {
      param1: Cypress._.random(100),
      param2: Cypress._.random(100),
    };

    // Wysłanie zapytania PUT z losowymi parametrami
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/put",
      qs: queryParams,
    }).then((response) => {
      // Asercje na odpowiedzi
      expect(response.status).to.eq(200);
      expect(response.headers).to.exist;
      expect(response.body).to.not.be.empty;
      expect(response.body.args.param1).to.eq(queryParams.param1.toString());
      expect(response.body.args.param2).to.eq(queryParams.param2.toString());
    });
  });
});
