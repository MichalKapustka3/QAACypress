// Test 9: Zapytanie GET z niestandardowym nagłówkiem i parametrami
describe("Zapytanie GET z niestandardowym nagłówkiem i parametrami", () => {
  it("powinno wysłać zapytanie GET z niestandardowym nagłówkiem i parametrami", () => {
    const headers = {
      "Custom-Header": "Custom Value",
    };
    const params = {
      key: "value",
    };

    // Wysłanie zapytania GET z niestandardowym nagłówkiem i parametrami
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
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
