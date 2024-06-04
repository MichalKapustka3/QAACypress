// Test 8: Zapytanie PUT z niestandardowym nagłówkiem i treścią JSON
describe("Zapytanie PUT z niestandardowym nagłówkiem i treścią JSON", () => {
  it("powinno wysłać zapytanie PUT z niestandardowym nagłówkiem i treścią JSON", () => {
    const headers = {
      "Custom-Header": "Custom Value",
    };
    const body = {
      key: "value",
    };

    // Wysłanie zapytania PUT z niestandardowym nagłówkiem i treścią JSON
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/put",
      headers: headers,
      body: body,
    }).then((response) => {
      // Asercje na odpowiedzi
      expect(response.status).to.eq(200);
      expect(response.headers).to.exist;
      expect(response.body).to.not.be.empty;
      expect(response.body.json).to.deep.eq(body);
      expect(response.body.headers["Custom-Header"]).to.eq("Custom Value");
    });
  });
});
