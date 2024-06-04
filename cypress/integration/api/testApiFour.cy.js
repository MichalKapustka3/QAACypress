// Test 4: Zapytanie GET z niestandardowym nagłówkiem użytkownika
describe("Zapytanie GET z niestandardowym nagłówkiem User-Agent", () => {
  it("powinno wysłać zapytanie GET z niestandardowym nagłówkiem User-Agent", () => {
    const headers = {
      "User-Agent": "Custom User Agent",
    };

    // Wysłanie zapytania GET z niestandardowym nagłówkiem
    cy.request({
      method: "GET",
      url: "https://httpbin.org/user-agent",
      headers: headers,
    }).then((response) => {
      // Asercje na odpowiedzi
      expect(response.status).to.eq(200);
      expect(response.headers).to.exist;
      expect(response.body).to.not.be.empty;
      expect(response.body["user-agent"]).to.eq("Custom User Agent");
    });
  });
});
