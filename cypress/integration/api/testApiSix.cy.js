// Test 6: Zapytanie POST z niestandardowym nagłówkiem i treścią JSON
describe("Zapytanie POST z niestandardowym nagłówkiem i treścią JSON", () => {
  it("powinno wysłać zapytanie POST z niestandardowym nagłówkiem i treścią JSON", () => {
    const headers = {
      "Custom-Header": "Custom Value",
    };
    const body = {
      key: "value",
    };

    // Wysłanie zapytania POST z niestandardowym nagłówkiem i treścią JSON
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
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
