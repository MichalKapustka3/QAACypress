// Test 10: Zapytanie DELETE z niestandardowym nagłówkiem i parametrami
describe("Zapytanie DELETE z niestandardowym nagłówkiem i parametrami", () => {
  it("powinno wysłać zapytanie DELETE z niestandardowym nagłówkiem i parametrami", () => {
    const headers = {
      "Custom-Header": "Custom Value",
    };
    const params = {
      key: "value",
    };

    // Wysłanie zapytania DELETE z niestandardowym nagłówkiem i parametrami
    cy.request({
      method: "DELETE",
      url: "https://httpbin.org/delete",
      headers: headers,
      qs: params,
    }).then((response) => {
      // Asercje na odpowiedzi
      expect(response.status).to.eq(200);
      expect(response.headers).to.exist;
      expect(response.body).to.not.be.empty;
      expect(response.body.args).to.deep.eq(params);
      expect(response.body.headers["Custom-Header"]).to.eq("Custom Value");
    });
  });
});
