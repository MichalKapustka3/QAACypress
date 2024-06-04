// Test 1: GET request bez parametró
describe("HTTP GET Request", () => {
  it("should send GET request without any parameters", () => {
    cy.request("GET", "https://httpbin.org/get").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.exist;
      expect(response.body).to.not.be.empty;
      expect(response.body.url).to.eq("https://httpbin.org/get");
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});
