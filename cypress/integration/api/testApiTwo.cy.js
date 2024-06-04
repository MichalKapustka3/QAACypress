// Test 2: POST request y headers
describe("HTTP POST Request", () => {
  it("should send POST request with custom headers", () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer myToken",
    };

    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      headers: headers,
      body: { key: "value" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.exist;
      expect(response.body).to.not.be.empty;
      expect(response.body.headers["Content-Type"]).to.eq("application/json");
    });
  });
});
